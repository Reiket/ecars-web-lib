import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/global.scss';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
