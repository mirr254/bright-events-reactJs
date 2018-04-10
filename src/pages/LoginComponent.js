import React, { Component } from "react";
import { Jumbotron } from 'reactstrap';
import LoginForm from '../components/LoginFormComponent';
import "../assets/login.css";
import Axios from "axios";

export default class Login extends Component {
    constructor(props){
        //passing props to the parent class
        super(props);
        //set initial state
        this.state = {
            data : []
        };

        this.LOGIN_API_URL = 'https://brighter-event.herokuapp.com/api/v1/auth/login';
    }

    //lifecycle method
    componentDidMount(){
        //make a get request
        Axios.get(this.LOGIN_API_URL)
        .then( (res) => {
            //set the state with result
            this.setState({data:res.data})

        });

    }

    //login user handler
    loginUser(username,password){
        //logic
    }


    render() {
        return (
            <div>
                <Jumbotron>
                <div className="login">
                    <LoginForm />
                </div>
                </Jumbotron>
            </div>
        );
    }
}