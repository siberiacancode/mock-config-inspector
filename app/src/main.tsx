import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

import './assets/styles/global.css';

const init = async () => {
  const payload = await (await fetch('/api/payload')).json();
  console.log('@', payload);
  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <App payload={payload} />
    </StrictMode>
  );
};

init();
