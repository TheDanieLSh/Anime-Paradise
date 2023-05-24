import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/reduxStateStore";
import "./index.css";
import SearchBar from "./components/SearchBar";
import Menu from "./components/Menu";
import Sections from "./components/Sections";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
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
  return (
    <div>
      <header>
        <SearchBar />
        <Menu />
      </header>
      <main>
        <Sections />
      </main>
    </div>
  );
}

reportWebVitals();
