import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { AppBar, Toolbar, IconButton, Typography, Button, AutoComplete } from 'material-ui';
import { Link } from 'react-router-dom'

const styles = {
        root: {
                flexGrow: 1,
        },
        flex: {
                flex: 1,
        },
       
};
const loginLink = props => <Link to='/login' {...props} /> // necessary to prevent unexpected unmounting
const signupLink = props => <Link to='/signup' {...props} />

const CustomHeader = (props) => { 
        const { classes } = props;
        return (
                <AppBar position="static">
                        <Toolbar>
                                
                                <Typography variant="headline" color="inherit" className={classes.flex} >
                                        Bright Events
                                </Typography>
                                
                                <Button color="inherit" component={loginLink} >Login</Button>
                                <Button color="inherit" component={signupLink} >Sign up</Button>
                        </Toolbar>
                </AppBar>
        );

        CustomHeader.propTypes = {
                classes: PropTypes.object.isRequired,
        };
    
}

export default withStyles(styles)( CustomHeader);