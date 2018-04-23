import React, { Component } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button } from 'material-ui';

const CustomHeader = (props) => {
        return (
                <AppBar position="static">
                        <Toolbar>
                                <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                                        <MenuIcon />
                                </IconButton>
                                <Typography variant="title" color="inherit" className={classes.flex}>
                                        Bright Events
                                </Typography>
                                <Button color="inherit">Login</Button>
                        </Toolbar>
                </AppBar>
        );
    
}

export default CustomHeader;