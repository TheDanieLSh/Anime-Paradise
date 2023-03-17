import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Logo from './Logo';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <Logo />
    </header>
  </React.StrictMode>
);

reportWebVitals();
