import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const letters = ['a', 'b', 'c', 'd'];
root.render(
  <StrictMode>
    <App values={letters} />
  </StrictMode>
);
