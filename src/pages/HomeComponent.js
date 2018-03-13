import React, { Component } from 'react';
import { Navbar, Grid} from 'react-bootstrap';

import logo from '../assets/logo.svg';
import '../assets/App.css';
import '../assets/index.css';


class Home extends Component {
    render() {
        return (
            
            <div className="App">
                // navigation bar
                <Navbar inverse fixedTop>
                    <Grid>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <a href="/">Bright Events</a>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                        </Navbar.Header>
                    </Grid>
                </Navbar>
                //Navbar end
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Bright Events</h1>
                </header>
                <p className="App-intro">
                        To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                
            </div>
        );
    }
}

export default Home;