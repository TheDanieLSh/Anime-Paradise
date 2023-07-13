import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider, useDispatch } from 'react-redux';
import { fetchProducts } from './redux/fetchDataReducer';
import { store } from './redux/reduxStateStore';
import './index.css';
import SearchBar from './components/SearchBar';
import Logo from './components/Logo';
import Menu from './components/Menu';
import Section from './components/Section';
import ProductPage from './components/ProductPage';
import Bottom from './components/Bottom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch])

  return (
    <div>
      <header>
        <SearchBar />
        <Logo />
        <Menu />
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
}

reportWebVitals();