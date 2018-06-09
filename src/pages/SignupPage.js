import React, { Component } from 'react';
import axios from 'axios';
import SignupForm from '../components/SignupFormComponent';
import CustomHeader from '../components/HeaderComponent';
import Snackbar from '@material-ui/core/Snackbar';
import Button from '@material-ui/core/Button';

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
            errorMsg:'initial msg'
        }
    }

    handleClick = (event) => {
        var apiBaseUrl = "https://brighter-event.herokuapp.com/api/v1/auth";
        console.log("values", this.state.username, this.state.email, this.state.password);
        //TODO: be done:check for empty values before hitting submit
        var self = this;
        console.log('before', this);
        let  history = this.props.history;
        var payload = {
            "username": this.state.username,
            "email": this.state.email,
            "password": this.state.password
        }
        axios.post(apiBaseUrl + '/register', payload)
            .then( (response) => {
                this.props.history.replace('/login');
            })
            .catch((error) => {
                console.log(error.response.data.message);
                this.setState({ 
                    errorMsg: error.response.data.message,
                    signupSnackBar: true
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