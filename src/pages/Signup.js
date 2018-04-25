import React, { Component } from 'react';
import { MuiThemeProvider, Button, AppBar, TextField} from 'material-ui/styles/MuiThemeProvider';
import axios from 'axios';
import SignupForm from '../components/SignupFormComponent';
import CustomHeader from '../components/HeaderComponent';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
            showPassword : false,
        }
    }

    handleClick(event) {
        var apiBaseUrl = "https://brighter-event.herokuapp.com/api/v1/auth";
        console.log("values", this.state.username, this.state.email, this.state.password);
        //TODO: be done:check for empty values before hitting submit
        var self = this;
        var payload = {
            "username": this.state.username,
            "email": this.state.email,
            "password": this.state.password
        }
        axios.post(apiBaseUrl + '/register', payload)
            .then(function (response) {
                console.log(response);
                if (response.data.code === 200) {
                    //  console.log("registration successfull");
                    var loginscreen = [];
                    // loginscreen.push(<Login parentContext={this} />);
                    var loginmessage = "Not Registered yet.Go to registration";
                    self.props.parentContext.setState({
                        loginscreen: loginscreen,
                        loginmessage: loginmessage,
                        buttonLabel: "Register",
                        isLogin: true
                    });
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value});
        console.log('states', this.state )
    }

    handleClickShowPassword = () =>{
        this.setState({ showPassword : !this.state.showPassword });
    }

    handleMouseDownPassword = event => {
        event.preventDefault();
    }
    

    render() {
        return (
            // 
            <div>
                <CustomHeader />
                <div align='center' >
                    <br />
                    <div >
                        <SignupForm
                            handleClick={this.handleClick}
                            handleChange = {this.handleChange} 
                            showPassword={this.state.showPassword}
                            handleClickShowPassword = { this.handleClickShowPassword}
                            handleMouseDownPassword = { this.handleMouseDownPassword}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;