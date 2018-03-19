import { Header } from 'react-bootstrap';
import React, { Component } from 'react';

import '../assets/App.css';
import '../assets/index.css';

CustomHeader = (props) => {
        return (
             < header className = "App-header" >
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Bright Events</h1>
             </header >
        );
    
}

export default CustomHeader;