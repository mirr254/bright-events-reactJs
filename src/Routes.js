import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/HomeComponent';
import CustomNavbar from './components/NavbarComponent';

class Routes extends Component {
  render(){
    return(
      
        <BrowserRouter>
          <div>
            <CustomNavbar />
              <Switch>
                  <Route exact path='/' component={Home}/> 
              </Switch>
          </div>
        </BrowserRouter>
     
    )
  };
}

export default Routes;