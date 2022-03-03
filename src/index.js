import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'assets/styles/index.css';
import { HashRouter as Router } from 'react-router-dom';
import ScrollToTop from 'utils/ScrollToTop';

/* Using HashRouter for GH-Pages */
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
