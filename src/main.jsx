import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './App.css';

// Handle initial load
if (window.location.pathname !== '/' || !window.location.hash) {
  const redirectTo = '/#' + window.location.pathname + window.location.search;
  window.history.replaceState(null, '', redirectTo);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
);
