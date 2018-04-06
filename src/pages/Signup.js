import React, { Component } from 'react';
import { FormGroup,
         FormControl,
         ControlLabel
         } from 'react-bootstrap';
import "../assets/Signup.css";

class Signup extends Component {
    constructor(props){
        super(props);

        this.state ={
            isLoading : false,
            username : '',
            email : '',
            password : '',
            confirm_password : ''
        };
    }

    validateForm() {
        this.state.password === this.state.confirm_password &&
        this.state.username.length > 0 &&
        this.state.email.length > 0 
    }

    handleSubmit = async event => {
        event.preventDefault();
        this.setState({ isLoading : true});
        this.setState( { newUser : 'test' });
        this.setState({ isLoading: true });

    }


    renderForm() {
        return (
            <form onSubmit={this.handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <ControlLabel>Email</ControlLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="username" bsSize="large">
                    <ControlLabel>Username</ControlLabel>
                    <FormControl
                        autoFocus
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <ControlLabel>Password</ControlLabel>
                    <FormControl
                        value={this.state.password}
                        onChange={this.handleChange}
                        type="password"
                    />
                </FormGroup>
                <FormGroup controlId="confirmPassword" bsSize="large">
                    <ControlLabel>Confirm Password</ControlLabel>
                    <FormControl
                        value={this.state.confirmPassword}
                        onChange={this.handleChange}
                        type="password"
                    />
                </FormGroup>
                
            </form>
        );
    }

    render() {
        return(
            <div className='Signup'>
                { 
                    this.renderForm()
                }
            </div>
        );
    }
}

export default Signup
