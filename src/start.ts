import color from 'ansi-colors';
import express from 'express';
import { getPort } from 'get-port-please';
import path from 'node:path';

import type { MockServerInspectorArgv } from './types';

import { createWsServer } from './ws';

export const start = async (argv: MockServerInspectorArgv) => {
  const host = argv.host ?? '127.0.0.1';
  const port = await getPort({ port: argv.port, portRange: [7777, 9000], host });

  const app = express();
  const ws = await createWsServer();

  app.get('/', (_req, res) => res.sendFile(path.join(__dirname, '..', 'build', 'index.html')));

  app.get('/api/payload', (_req, res) => {
    res.json(ws.getData());
  });

  app.use(express.static(path.join(__dirname, '..', 'build')));

  app.listen(port, () => {
    console.log(
      color.blue('ℹ'),
      `Starting ESLint config inspector at`,
      color.green(`http://${host === '127.0.0.1' ? 'localhost' : host}:${port}`),
      '\n'
    );
  });
};
