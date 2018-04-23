import React, { Component } from 'react';
import { Button, TextField} from 'material-ui';

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
            <Button variant='raised' color='primary' label="Submit" primary={true} style={style} onClick={props.handleClick} />
        </div>
    );
};
const style = {
    margin: 15,
};
export default LoginForm;