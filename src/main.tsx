import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

const root = document.getElementById('root');
if (!root) throw new Error('No se encontró el contenedor de la página');

const app = (
  <React.StrictMode>
    <App pathname={window.location.pathname} />
  </React.StrictMode>
);

if (root.dataset.prerendered === 'true') {
  ReactDOM.hydrateRoot(root, app);
} else {
  ReactDOM.createRoot(root).render(app);
}
