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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/calculator" element={<App />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>,
);
