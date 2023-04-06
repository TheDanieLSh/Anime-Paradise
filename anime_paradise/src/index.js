import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SearchBar from './components/SearchBar';
import Logo from './components/Logo';
import Menu from './components/Menu';
import GoodsList from './components/GoodsList'; 
import Preferences from './Preferences';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <header>
      <SearchBar />
      <Logo />
      <Menu />
    </header>
    <main>
      <GoodsList />
    </main>
  </React.StrictMode>
);

reportWebVitals();
