import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './App.css';

<<<<<<< HEAD
=======
// Handle initial load
if (window.location.pathname !== '/' || !window.location.hash) {
  const redirectTo = '/#' + window.location.pathname + window.location.search;
  window.history.replaceState(null, '', redirectTo);
}

>>>>>>> 2cc40f501ed9b722dab6f7d272569619c807a9d8
ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
);
