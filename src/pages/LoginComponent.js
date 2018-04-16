import React, { Component } from "react";
import { Jumbotron } from 'reactstrap';
import LoginForm from '../components/LoginFormComponent';
import { LoginFormErrors } from '../components/FormErros';
import "../assets/login.css";
import axios from "axios";

export default class Login extends Component {
    constructor(props){
        //passing props to the parent class
        super(props);
        //set initial state
        this.state = {
            data : [],
            username: '',
            password: '',
            loginFormErrors: {username: '',password:'' },
            usernameValid: false,
            passwordValid: false,
            formValid: false
        };
        console.log('state', this.state)

        this.LOGIN_API_URL = 'https://brighter-event.herokuapp.com/api/v1/auth/login';
    }
    

   

    //login user handler
    onChange = (event) => { this.handleUserInput(event) }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}, 
        ()=> {this.validateFormFields(name,value) });
    }

    validateFormFields(fieldName, value){
        let validationErrors = this.state.loginFormErrors;
        let usernameValid = this.state.usernameValid;
        let passwordValid = this.state.passwordValid

        switch (fieldName) {
            case 'username':
                usernameValid = value.length >= 4;
                validationErrors.username = usernameValid ? "" : " is too short";
                break;

            case 'password':
                passwordValid = value.length >= 7;
                validationErrors.password = passwordValid ? "" : "password must have atleast 6 characters. both letters numbers";
                break;
        
            default:
                break;
        }

        this.setState({
            loginFormErrors : validationErrors,
            usernameValid : usernameValid,
            passwordValid : passwordValid
        }, this.validateForm);
    }

    // a function to set the state of a valid or invalid form
    validateForm(){
        this.setState({
            formValid : this.state.usernameValid && this.state.passwordValid
        });
    }

    handleLogin = () => {
        
        axios.post('https://brighter-event.herokuapp.com/api/v1/auth/login', 
                      { username: this.state.username, 
                        password: this.state.password
                    })
    }
        
    render() {
        return (
            <div>
                <Jumbotron>
                <div className="login">
                    <div className="panel panel-default">
                        <LoginFormErrors loginFormErrors={this.state.loginFormErrors} />
                    </div>
                    <LoginForm
                            onChange={this.onChange}
                            handleLogin={this.handleLogin}
                     />
                </div>
                </Jumbotron>
            </div>
        );
    }
}