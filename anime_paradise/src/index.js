import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import fetchDataState from "./mobx/fetchDataState";
import './index.css';
import SearchBar from './components/SearchBar';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Section from './components/Section';
import ProductPage from './components/ProductPage';
import Bottom from './components/Bottom';
import reportWebVitals from './reportWebVitals';

const App = observer(() => {
  useEffect(() => {
    fetchDataState.fetchProducts();
  }, [fetchDataState])

  return (
    <div>
      <header>
        <SearchBar />
        <Logo />
        <Routes>
          <Route path='/:section/*' element={<Menu />} />
          <Route path='/search/*' element={<Menu />} />
          <Route path='/*' element={<Menu />} />
        </Routes>
      </header>
      <main>
        <Routes>
          <Route path='*' element={<Section />} />
          <Route path='/product/:product_id' element={<ProductPage />} />
        </Routes>
      </main>
      <footer>
        <Bottom />
      </footer>
    </div>
  )
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <App />
    </Router>
);

reportWebVitals();