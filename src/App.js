import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Auth from './containers/Auth/Auth';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/auth">Auth</Link></li>
          </ul>
          <hr />
          <Route exact path="/auth" component={Auth} />
        </div>
      </Router>
    );
  }
}

export default App;
