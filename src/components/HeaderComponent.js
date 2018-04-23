import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { AppBar, Toolbar, IconButton, Typography, Button } from 'material-ui';

const styles = {
        root: {
                flexGrow: 1,
        },
        flex: {
                flex: 1,
        },
       
};

const CustomHeader = (props) => {
        const { classes } = props;
        return (
                <AppBar position="static">
                        <Toolbar>
                                
                                <Typography variant="headline" color="inherit" className={classes.flex} >
                                        Bright Events
                                </Typography>
                                <Button color="inherit">Login</Button>
                        </Toolbar>
                </AppBar>
        );

        CustomHeader.propTypes = {
                classes: PropTypes.object.isRequired,
        };
    
}

export default withStyles(styles)( CustomHeader);