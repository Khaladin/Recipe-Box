import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import NavBar from './components/navbar';

ReactDOM.render(
  <Router>
    <NavBar />
  </Router>



  , document.getElementById('root'));
registerServiceWorker();
