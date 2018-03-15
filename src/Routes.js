import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/HomeComponent';
import CustomNavbar from './components/NavbarComponent';
import NotFound from './pages/NotFound';

class Routes extends Component {
  render(){
    return(
      
        <BrowserRouter>
          <div>
            <CustomNavbar />
              <Switch>
                  <Route exact path='/' component={Home}/> 
                  <Route component={NotFound} />
              </Switch>
          </div>
        </BrowserRouter>
     
    )
  };
}

export default Routes;