import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Create root element
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element with id 'root' not found in index.html");
}

// Initialize React root
const root = ReactDOM.createRoot(rootElement);

// Render application with StrictMode for highlighting potential issues
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
