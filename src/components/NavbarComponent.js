import { Navbar, Nav, NavItem, NavbarBrand, NavbarToggler, NavLink } from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import React, { Component } from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../assets/App.css';

const CustomNavbar = (props) => {
    
        return(
            <div>
                <Navbar className="navbar-inverse" color="red" toggleable>
                    <NavbarBrand href="/">Bright Events</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/login">Login</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/signup">Sign up</NavLink>
                            </NavItem>
                            
                        </Nav>
                   
                </Navbar>
            </div>
        );

    Navbar.propTypes = {
        dark: PropTypes.bool,
        dark: PropTypes.bool,
        fixed: PropTypes.string,
        color: PropTypes.string,
        role: PropTypes.string,
        expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
        tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
        // pass in custom element to use
    }
    
}


export default CustomNavbar;
