import { useWebSocket } from '@siberiacancode/reactuse';
import { useState } from 'react';

interface AppProps {
  payload: {
    ws: {
      port: number,
      lastUpdated: number
    };
    config: MockServerConfig;
  }
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

  return <div>
    <pre>ws: {JSON.stringify(props.payload.ws, null, 2)}</pre>
    <br />
    <pre>settings {JSON.stringify(settings, null, 2)}</pre>
    <br />
    <pre>components {JSON.stringify(components, null, 2)}</pre>
  </div>
};

export default App;
