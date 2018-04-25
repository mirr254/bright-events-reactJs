import React, { Component } from 'react';
import { Button, TextField} from 'material-ui';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import Input, { InputLabel, InputAdornment } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
//import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import { VisibilityOff, AccountCircle, Visibility } from '@material-ui/icons';

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

const LoginForm2 = (props) => {

        const { classes } = props;
        console.log('State', props.state)

        return (
            <div className={classes.root}>
                <TextField
                    label="Username"
                    onChange={props.handleChange('username')}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                    id="simple-start-adornment"
                    className={classNames(classes.margin, classes.textField)}

                />
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
                <br />
                <Button variant='raised' color='primary' label="Submit" primary={true} style={style} onClick={props.handleClick} >
                    Submit
                </Button>
            </div>
        );
    
}

LoginForm2.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginForm2);
