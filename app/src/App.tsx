import { useWebSocket } from '@siberiacancode/reactuse';
import { useState } from 'react';

interface AppProps {
  payload: any;
}

const App = ({ payload }: AppProps) => {
  const [lastUpdated, setLastUpdated] = useState(payload.meta.lastUpdated);
  useWebSocket(`ws://${location.hostname}:${payload.meta.wsPort}`, {
    onMessage: (event) => {
      console.log('@event', event);
      setLastUpdated(Date.now());
    }
  });

  return (
    <>
      <p>{lastUpdated}</p>
      <code>{JSON.stringify(payload)}</code>
    </>
  );
};

export default App;
