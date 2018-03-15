import { Navbar} from 'react-bootstrap';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import '../assets/App.css';

class CustomNavbar extends Component {
    render(){
        return(
            <div className="App container">
                <Navbar fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Bright Events</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                </Navbar>
            </div>
        );
    }
}

export default CustomNavbar;
