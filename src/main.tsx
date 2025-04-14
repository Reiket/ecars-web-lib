import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/global.scss';
import './index.css';

import {BrowserRouter} from 'react-router';
import {App} from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}