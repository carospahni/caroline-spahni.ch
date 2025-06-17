import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './App.css';

// Handle initial load with hash
const initialPath = window.location.hash.substring(1) || '/';
if (window.location.hash) {
  window.history.replaceState(null, '', initialPath);
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter basename="/">
    <App />
  </HashRouter>
);
