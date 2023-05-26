import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/reduxStateStore';
import './index.css';
import SearchBar from './components/SearchBar';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Sections from './components/Sections';
import Bottom from './components/Bottom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <header>
          <SearchBar />
          <Logo />
          <Menu />
        </header>
        <main>
          <Sections />
        </main>
        <footer>
          <Bottom />
        </footer>
      </Provider>
    </Router>
  </React.StrictMode>
);

reportWebVitals();