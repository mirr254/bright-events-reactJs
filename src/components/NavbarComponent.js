import { Navbar, Grid } from 'react-bootstrap';
import React, { Component } from "react";

class CustomNavbar extends Component {
    render(){
        return(
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
        );
    }
}

export default CustomNavbar;
