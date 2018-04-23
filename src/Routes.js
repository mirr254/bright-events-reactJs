import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/HomeComponent';
import NotFound from './pages/NotFound';
import Login from './pages/LoginComponent';
import Signup from './pages/Signup';
import ConfirmEmail from './pages/ConfirmRegistration';

class Routes extends Component {
  
  render(){
    return(
      
        <BrowserRouter>
          <div>
            <Switch>
                <Route exact path='/' component={Home}/> 
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/confirm' component={ConfirmEmail} />
                 
                <Route component={NotFound} />
                
              </Switch>
          </div>
        </BrowserRouter>
     
    )
  };
}

export default Routes;