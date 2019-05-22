import React from 'react';
import Login from './views/Login'
import SignUp from './views/SignUp'
import Friend from './views/Friend'

import {  Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
     <nav>
          <h1 className="store-header">Welcome to Friends</h1>
          <div className="nav-links">
            <Link to="/views/Login">Sign In</Link>
            <Link to="/views/SignUp">Sign UP</Link>
            <Link to="/views/Friend">Friends</Link>
          </div>
        </nav>

        <Route exact path="/views/Friend" component={Friend} />
        <Route exact path="/views/Login" component={Login} />
        <Route path="/views/SignUp" component={SignUp} />
    </div>
  );
}

export default App;
