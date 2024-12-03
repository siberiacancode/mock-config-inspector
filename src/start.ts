import color from 'ansi-colors';
import { getPort } from 'get-port-please';
import { createApp, eventHandler, serveStatic, toNodeListener } from 'h3';
import { lookup } from 'mrmime';
import { readFile, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';
import open from 'open';

import type { MockServerInspectorArgv } from './types';

import { stringify } from './helpers/stringify';
import { createConfigWatcher } from './watch';
import { createWsServer } from './ws';

export const start = async (argv: MockServerInspectorArgv) => {
  const host = argv.host ?? '127.0.0.1';
  const port = await getPort({ port: argv.port, portRange: [7777, 9000], host });

  const app = createApp();

  const ws = await createWsServer();

  const watcher = await createConfigWatcher(argv, (mockConfig) =>
    ws.send(
      JSON.stringify(
        stringify({ type: 'config-updated', payload: { ws: ws.getData(), config: mockConfig } })
      )
    )
  );

  app.use(
    '/api/payload',
    eventHandler(async (event) => {
      event.node.res.setHeader('Content-Type', 'application/json');
      return event.node.res.end(
        JSON.stringify({ ws: ws.getData(), config: stringify(watcher.getConfig()) })
      );
    })
  );

  app.use(
    '/api/config',
    eventHandler(async (event) => {
      event.node.res.setHeader('Content-Type', 'application/json');
      return event.node.res.end(JSON.stringify(stringify(watcher.getConfig())));
    })
  );

  app.use(
    '/',
    eventHandler((event) =>
      serveStatic(event, {
        getContents: (file) => readFile(path.join(__dirname, '..', 'build', file)),
        getMeta: async (file) => {
          const stats = await stat(path.join(__dirname, '..', 'build', file));

          if (!stats || !stats.isFile()) {
            return;
          }

          return {
            type: lookup(file),
            size: stats.size,
            mtime: stats.mtimeMs
          };
        }
      })
    )
  );

  const server = createServer(toNodeListener(app));

  server.listen(port, async () => {
    const url = `http://${host === '127.0.0.1' ? 'localhost' : host}:${port}`;
    if (argv.open) await open(url);

    console.log(color.blue('ℹ'), `Starting mock config inspector at`, color.green(url), '\n');
  });
};
