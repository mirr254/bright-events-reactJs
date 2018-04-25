import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginForm2 from '../components/LoginFormComponent';
import CustomHeader from '../components/HeaderComponent';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            showPassword: false,
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

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
        console.log('State', this.state.password + " "+ this.state.username)
    };

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState({ showPassword: !this.state.showPassword });
    };

    render() {
        return (
            <div>
                <CustomHeader />
                <div align='center' >
                <br />
                <div >
                    <LoginForm2 
                    handleClick = {this.handleClick}  
                    handleClickShowPassword = {this.handleClickShowPassword}
                    handleMouseDownPassword = {this.handleMouseDownPassword}
                    handleChange = {this.handleChange}
                    showPassword={this.state.showPassword}
                    />
                </div>
                </div>
            </div>
        );
    }
}
const style = {
    margin: 5,
};
export default Login;