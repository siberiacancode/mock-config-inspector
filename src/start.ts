import color from 'ansi-colors';
import express from 'express';
import { getPort } from 'get-port-please';
import path from 'node:path';
import open from 'open';

import type { MockServerInspectorArgv } from './types';

import { stringify } from './helpers/stringify';
import { createConfigWatcher } from './watch';
import { createWsServer } from './ws';

export const start = async (argv: MockServerInspectorArgv) => {
  const host = argv.host ?? '127.0.0.1';
  const port = await getPort({ port: argv.port, portRange: [7777, 9000], host });

  const server = express();
  const ws = await createWsServer();

  const watcher = await createConfigWatcher(argv, (mockConfig) =>
    ws.send(
      JSON.stringify(
        stringify({ type: 'config-updated', payload: { ws: ws.getData(), config: mockConfig } })
      )
    )
  );

  server.get('/', (_req, res) => res.sendFile(path.join(__dirname, '..', 'build', 'index.html')));

  server.get('/api/payload', (_req, res) => {
    res.json({ ws: ws.getData(), config: stringify(watcher.getConfig()) });
  });

  server.get('/config', (_req, res) => {
    res.json(stringify(watcher.getConfig()));
  });

  console.log('@watcher.getConfig()', watcher.getConfig()[3].interceptors.response.toString());

  server.use(express.static(path.join(__dirname, '..', 'build')));

  server.listen(port, async () => {
    const url = `http://${host === '127.0.0.1' ? 'localhost' : host}:${port}`;
    if (argv.open) await open(url);

    console.log(color.blue('ℹ'), `Starting mock config inspector at`, color.green(url), '\n');
  });
};
