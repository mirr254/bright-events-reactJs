import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/HomePage';
import NotFound from './pages/NotFoundPage';
import Login from './pages/LoginPage';
import Signup from './pages/SignupPage';
import ConfirmEmail from './pages/ConfirmRegistrationPage';
import EventViewCard from './pages/SingleEventPage';
import UserProfilePage from './pages/UserProfilePage';
import CustomHeader from './components/HeaderComponent';
import AllEvents from './pages/AllEventsPage';
import CreateEventPage from './pages/CreateEventPage';
import EditEventPage from './pages/EditEventPage';


class Routes extends Component {
  
  render(){
    return(
      
        <BrowserRouter>
          <div>
            <CustomHeader />
            <Switch>
                <Route exact path='/' component={Home}/> 
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/confirm' component={ConfirmEmail} />
                <Route exact path= '/user/:id' component={UserProfilePage} />
                <Route exact path='/events' component={AllEvents} />
                <Route path='/events/create-event' component={CreateEventPage} />
                <Route path='/events/edit-event' component={EditEventPage} />
                <Route path='/events/:id' component={EventViewCard} />
                 
                <Route component={NotFound} />
                
              </Switch>
          </div>
        </BrowserRouter>
     
    )
  };
}

export default Routes;