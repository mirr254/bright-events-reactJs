import React, { Component, Fragment } from "react";
import CustomHeader from "../components/HeaderComponent";
import Footer from '../components/FooterComponent';
import AllEvents from './AllEventsPage';
import {PropTypes } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { width } from "window-size";

const styles = theme =>({
    root: {
        width: '85%',
        margin: 'auto',
    }
});

function Home(props) {

    const {classes} = props;
   
        return( <div>

            <div className= {classes.root}>
            
            <CustomHeader />

            <AllEvents />

            <Footer />
            </div>

        </div>    
        );
}

export default withStyles(styles)( Home);