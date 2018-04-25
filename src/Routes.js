import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage';
import NotFound from './pages/NotFoundPage';
import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';
import ConfirmEmail from './pages/ConfirmRegistrationPage';
import EventViewCard from './pages/SingleEventPage';
import UserProfilePage from './pages/UserProfilePage';

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
                <Route path= '/user/1w' component={UserProfilePage} />
                <Route path='/events/1' component={EventViewCard} />
                 
                <Route component={NotFound} />
                
              </Switch>
          </div>
        </BrowserRouter>
     
    )
  };
}

export default Routes;