import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'assets/styles/index.css';
import { HashRouter as Router } from 'react-router-dom';
import ScrollToTop from 'utils/ScrollToTop';
import { Provider } from 'react-redux';
import store from 'store';

/* Using HashRouter for GH-Pages */
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ScrollToTop />
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
