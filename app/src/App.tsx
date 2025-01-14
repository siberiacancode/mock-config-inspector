import { useWebSocket } from '@siberiacancode/reactuse';
import { useState } from 'react';

import { Header, ServerInfoBar } from '@/components';
import { getDefaultScheme } from '@/utils/helpers';

import type { Component } from './components/ComponentsList/ComponentsList';

import { ComponentsList } from './components/ComponentsList/ComponentsList';
import { Providers } from './provider';

interface AppProps {
  payload: any;
}

interface ServerInfo {
  baseUrl: string;
  port: number;
  staticPath: string;
}

const App = (props: AppProps) => {
  const [payload, setPayload] = useState(props.payload);

  useWebSocket(`ws://${location.hostname}:${props.payload.ws.port}`, {
    onMessage: (event) => {
      console.log('@event2', event);
      setPayload(JSON.parse(event.data).payload);
    }
  });

  console.log('payload', payload);
  const serverInfo: ServerInfo = payload.config[0];
  const components: Component[] = payload.config.slice(1);
  console.log('serverInfo', serverInfo);
  console.log('components', components);

  const defaultScheme = getDefaultScheme();

  return (
    <>
      <Providers scheme={{ defaultScheme }}>
        <div className='flex flex-col bg-background items-center gap-xl'>
          <Header />
          <ServerInfoBar url={`http://localhost:${serverInfo.port}${serverInfo.staticPath}`} />
          <ComponentsList components={components} />
        </div>
      </Providers>
    </>
  );
};

export default App;
