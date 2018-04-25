import React, { Component } from 'react';
import { Button, TextField } from 'material-ui';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import MenuItem from 'material-ui/Menu/MenuItem';
import { VisibilityOff, AccountCircle, Visibility, Email } from '@material-ui/icons';


// material form 2
const style = {
    margin: 15,
};
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        flexBasis: 200,
    },
});

const SignupForm = (props) => {

    const { classes } = props;

    return (
        <div >
            <br />
            <FormControl className={classNames(classes.margin, classes.textField)}>
                <InputLabel htmlFor="input-with-icon-adornment">Username</InputLabel>
                <Input
                    id="input-with-icon-adornment"
                    onChange={props.handleChange('username')}
                    startAdornment={
                        <InputAdornment position="start">
                            <AccountCircle />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <br />
            <FormControl className={classNames(classes.margin, classes.textField)}>
                <InputLabel htmlFor="adornment-password">Email</InputLabel>
                <Input
                    id="input-with-icon-adornment2"
                    onChange={props.handleChange('email')}
                    startAdornment={
                        <InputAdornment position="start">
                            <Email />
                        </InputAdornment>
                    }
                />
            </FormControl>
            < br />
            <FormControl className={classNames(classes.margin, classes.textField)}>
                <InputLabel htmlFor="adornment-password">Password</InputLabel>
                <Input
                    id="adornment-password"
                    type={props.showPassword ? 'text' : 'password'}
                    value={props.password}
                    onChange={props.handleChange('password')}
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton
                                aria-label="Toggle password visibility"
                                onClick={props.handleClickShowPassword}
                                onMouseDown={props.handleMouseDownPassword}
                            >
                                {props.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            < br />
            <FormControl className={classNames(classes.margin, classes.textField)}>
                <InputLabel htmlFor="adornment-password">Confirm Password</InputLabel>
                <Input
                    id="adornment-password2"
                    type={props.showPassword ? 'text' : 'password'}
                    value={props.password}
                    onChange={props.handleChange('passwordConfirm')}
                    startAdornment={
                        <InputAdornment position="start">
                            <IconButton
                                aria-label="Toggle password visibility"
                                onClick={props.handleClickShowPassword}
                                onMouseDown={props.handleMouseDownPassword}
                            >
                                {props.showPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                />
            </FormControl>
            <br />

            <Button variant='raised' color='primary' label="Submit" primary={true} style={style} onClick={props.handleClick} >
                Take me In
                </Button>
           
        </div>
    );

}

SignupForm.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignupForm);
