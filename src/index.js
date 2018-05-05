import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './sass/main.css';

import NavBar from './components/Navbar';
import LandingPage from './components/LandingPage';

ReactDOM.render(
  <Router>
    <div>
      <NavBar />
      <LandingPage />
    </div>
  </Router>



  , document.getElementById('root'));
registerServiceWorker();
