import App from './components/app/App';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import 'normalize.css';

import './globalStyles.scss';

const container = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <App></App>
  </StrictMode>
);
