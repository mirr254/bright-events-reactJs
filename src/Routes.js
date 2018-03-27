import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/HomeComponent';
import CustomNavbar from './components/NavbarComponent';
import NotFound from './pages/NotFound';
import Login from './pages/LoginComponent';
import Signup from './pages/Signup';
import ConfirmEmail from './pages/ConfirmRegistration';
import EventDetails from './pages/SingleEventComponent';
import Events from './pages/EventsComponent';
import AddEvent from './pages/NewEventsPage';

class Routes extends Component {
  
  render(){
    return(
      
        <BrowserRouter>
          <div>
            <CustomNavbar />
            <Switch>
                <Route exact path='/' component={Home}/> 
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/confirm' component={ConfirmEmail} />
                <Route path='/events/1' component={EventDetails} />
                <Route exact path='/events' component={Events} />
                <Route path='/events/new_event' component={AddEvent} />
                 
                <Route component={NotFound} />
                
              </Switch>
          </div>
        </BrowserRouter>
     
    )
  };
}

export default Routes;