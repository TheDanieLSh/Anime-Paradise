import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Adminka from './components/Adminka';
import SearchBar from './components/SearchBar';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Pages from './components/Pages';
import Bottom from './components/Bottom';
import Preferences from './Preferences';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/adminka" element={<Adminka />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

function App() {
  return (
    <div>
      <header>
        <SearchBar />
        <Logo />
        <Menu />
      </header>
      <main>
        <Routes>
          <Route path='' element={<Pages page='main' />} />
          <Route path='/figures' element={<Pages page='figures' />} />
          <Route path='/dakimakuras' element={<Pages page='dakimakuras' />} />
          <Route path='/manga' element={<Pages page='manga' />} />
          <Route path='/other' element={<Pages page='other' />} />
        </Routes>
      </main>
      <footer>
        <Bottom />
      </footer>
    </div>
  )
}

reportWebVitals();
