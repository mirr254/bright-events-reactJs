import React, { Component } from 'react';
import axios from 'axios';
import SignupForm from '../components/SignupFormComponent';
import CustomHeader from '../components/HeaderComponent';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';
import AuthService from '../utils/AuthService';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
            showPassword : false,
            //snackbar

            signupSnackBar: false,
            vertical: 'bottom',
            horizontal: 'center',
            errorMsg:'initial msg',
            buttonLoading : false,
        }
        this.Auth = new AuthService()
    }

    handleClick = (event) => {
        var apiBaseUrl = "https://brighter-event.herokuapp.com/api/v1/auth";
        console.log("values", this.state.username, this.state.email, this.state.password);
        //TODO: be done:check for empty values before hitting submit
        this.setState({
            buttonLoading: true,
        })
        let  history = this.props.history;
        var payload = {
            "username": this.state.username,
            "email": this.state.email,
            "password": this.state.password
        }
        axios.post(apiBaseUrl + '/register', payload)
            .then( (response) => {
                this.props.history.replace('/login');
                this.setState({ 
                    errorMsg: "Registered successfully",
                    signupSnackBar: true,
                    buttonLoading: false,
                })
            })
            .catch((error) => {
                console.log(error.response.data.message);
                this.setState({ 
                    errorMsg: error.response.data.message,
                    signupSnackBar: true,
                    buttonLoading: false,
                })
                
            });
    };

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

    handleSnackBarClose = () => {
        this.setState({ signupSnackBar: false });
      };
    
      // add redirection if we are already logged in
  componentWillMount = () => {
    if (this.Auth.loggedIn()) {
      this.props.history.replace('/')
    }
  }

    render() {
        const { vertical, horizontal, signupSnackBar } = this.state;
        return (
            // 
            <div>
                <div align='center' >
                    <br />
                    <div >
                        <SignupForm
                            handleClick={this.handleClick}
                            handleChange = {this.handleChange} 
                            showPassword={this.state.showPassword}
                            handleClickShowPassword = { this.handleClickShowPassword}
                            handleMouseDownPassword = { this.handleMouseDownPassword}
                            buttonLoading = {this.state.buttonLoading}
                        />
                        
                    </div>
                </div>


                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={this.state.signupSnackBar}
                    autoHideDuration={5000}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    onClose={this.handleSnackBarClose}
                    message={<span id="message-id">{this.state.errorMsg}</span>}
               />
                         
            </div>
        );
    }
}

export default Register;