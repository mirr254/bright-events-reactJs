import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

const LoginForm = (props) => {
    // console.log('`login form component', props)
    return (
        <div>
            <TextField
                name = "username"
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange={props.onChange}
            />
            <br />
            <TextField
                name="password"
                type="password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange={props.onChange}
            />
            <br />
            <RaisedButton label="Submit" primary={true} style={style} onClick={props.handleClick} />
        </div>
    );
};
const style = {
    margin: 15,
};
export default LoginForm;