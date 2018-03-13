import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/HomeComponent';
import Authentication from './pages/AuthenticationComponent';

export default class App extends Component {
  render(){
    return(
      <Router>
        <div>
          <Route exact path='/' component={Home}/>
          <Route path='/auth' component={Authentication} />
        </div>
      </Router>
    )
  };
}

