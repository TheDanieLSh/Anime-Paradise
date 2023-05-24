import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/reduxStateStore';
import './index.css';
import Adminka from './components/Adminka';
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
        <Routes>
          <Route path="*" element={<App />} />
          <Route path="/adminka" element={<Adminka />} />
        </Routes>
      </Provider>
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
          <Sections />
      </main>
      <footer>
        <Bottom />
      </footer>
    </div>
  )
}

reportWebVitals();