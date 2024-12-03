import { useWebSocket } from '@siberiacancode/reactuse';
import { useState } from 'react';

interface AppProps {
  payload: any;
}

const App = (props: AppProps) => {
  const [payload, setPayload] = useState(props.payload);

  useWebSocket(`ws://${location.hostname}:${props.payload.ws.port}`, {
    onMessage: (event) => {
      console.log('@event2', event);
      setPayload(JSON.parse(event.data).payload);
    }
  });

  return <pre>{JSON.stringify(payload, null, 2)}</pre>;
};

export default App;
