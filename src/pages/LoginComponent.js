import React, {Component} from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

    }
    
    handleClick(event) {
        var apiBaseUrl = "https://brighter-event.herokuapp.com/api/v1/auth/";
        
        const requestPromise = require('request-promise');
        // encode data with base64 for the authentication
        const base64encodedData = new Buffer(
            this.state.username + ':' + this.state.password
        ).toString('base64');
        
        requestPromise.get({
            uri: apiBaseUrl+"login",
            headers: {
                'Authorization': 'Basic '+ base64encodedData
            },
            json: true
        }).then(function ok(jsonData) {
            console.log(jsonData);
        }).catch(function fail(error) {
            console.log(error);
        }) ;
        
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div>
                        <AppBar
                            title="Login"
                        />
                        <TextField
                            hintText="Enter your Username"
                            floatingLabelText="Username"
                            onChange={(event, newValue) => this.setState({ username: newValue })}
                        />
                        <br />
                        <TextField
                            type="password"
                            hintText="Enter your Password"
                            floatingLabelText="Password"
                            onChange={(event, newValue) => this.setState({ password: newValue })}
                        />
                        <br />
                        <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Login;