import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import App from './components/Calculator';
import Home from './components/Home';
import Quote from './components/Quote';
import NoPage from './components/NoPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Layout />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<App />} />
        <Route path="/quote" element={<Quote />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
