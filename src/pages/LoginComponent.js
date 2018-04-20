import React, {Component} from 'react';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import LoginForm from '../components/LoginFormComponent';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }

    }
    
    handleClick = event => {
        console.log("username : qwertgh", this.state)
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

    onChange = event => {
         this.setState({ [event.target.name]: event.target.value });
        console.log("current state ", this.state);
    }

    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <LoginForm handleClick = {this.handleClick} onChange = {this.onChange}/>
                </MuiThemeProvider>
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Login;