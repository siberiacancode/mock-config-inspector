import { useWebSocket } from '@siberiacancode/reactuse';
import { useState } from 'react';

import { Header, ServerInfoBar } from '@/components';
import { getDefaultScheme } from '@/utils/helpers';

import type { Component } from './components/ComponentsList/ComponentsList';

import { ComponentsList } from './components/ComponentsList/ComponentsList';
import { Providers } from './provider';

interface AppProps {
  payload: {
    ws: {
      port: number,
      lastUpdated: number
    };
    config: MockServerConfig;
  }
}

interface ServerInfo {
  baseUrl: string;
  port: number;
  staticPath: string;
}

const App = (props: AppProps) => {
  const [option, ...flatMockServerComponents] = props.payload.config;
  const flatMockServerSettings = !('configs' in option) ? option : undefined;

  const [settings, setSettings] = useState<MockServerSettings>(flatMockServerSettings ?? { baseUrl: '/', port: 31299 });
  const [components, setComponents] = useState(flatMockServerComponents);

  useWebSocket(`ws://${location.hostname}:${props.payload.ws.port}`, {
    onMessage: (event) => {
      const data = JSON.parse(event.data) as WebSocketMessage

      if (data.type === 'config-updated') {
        const [option, ...flatMockServerComponents] = data.payload.config;
        const flatMockServerSettings = !('configs' in option) ? option : undefined;

        if (flatMockServerSettings) {
          setSettings(flatMockServerSettings);
        }

        const components = flatMockServerSettings ? flatMockServerComponents : (data.payload.config as MockServerComponent[]);
        setComponents(components);
      }
    }
  });

  const defaultScheme = getDefaultScheme();

  return (
    <>
      <Providers scheme={{ defaultScheme }}>
        <div className='flex flex-col bg-background items-center gap-xl'>
          <Header />
          <ServerInfoBar url={`http://localhost:${settings.port}${settings.staticPath}`} />
          <ComponentsList components={components} />
        </div>
      </Providers>
    </>
  );
};

export default App;
