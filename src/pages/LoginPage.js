import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LoginForm2 from '../components/LoginFormComponent'
import CustomHeader from '../components/HeaderComponent'
import AuthService from '../utils/AuthService'
import { MyContext } from '../App'
import Snackbar from '@material-ui/core/Snackbar';

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      showPassword: false,
      buttonLoading: false,
      //snackbar

      signupSnackBar: false,
      vertical: 'bottom',
      horizontal: 'center',
      errorMsg:'initial msg',
    }
    this.Auth = new AuthService()
  }

  handleClick = event => {
    this.setState({
      buttonLoading: true,
     })
    //const loginResponse = this.Auth.login(this.state.username, this.state.password);
     

    const requestPromise = require('request-promise')
    var apiBaseUrl = 'https://brighter-event.herokuapp.com/api/v1/auth/'
    // encode data with base64 for the authentication
    const base64encodedData = new Buffer(this.state.username + ':' + this.state.password).toString(
      'base64'
    )

    requestPromise
      .get({
        uri: apiBaseUrl + 'login',
        headers: {
          Authorization: 'Basic ' + base64encodedData
        },
        json: true
      })
      .then((jsonData) =>{
        console.log("Login Data", Promise.resolve(jsonData))
        localStorage.setItem('id_token', jsonData.token)
        this.setState({
          buttonLoading: false,
          signupSnackBar: true,
          errorMsg: 'Successfully logged in'
         })
        
      })
      .catch( (error) => {
      console.log(error.message);
       
       this.setState({
        buttonLoading: false,
        signupSnackBar: true,
        errorMsg: 'Sorry! Wrong username or password'
       })
      })
     
      
  }

  // add redirection if we are already logged in
  componentWillMount = () => {
    if (this.Auth.loggedIn()) {
      this.props.history.replace('/')
    }
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value })
  }

  handleMouseDownPassword = event => {
    event.preventDefault()
  }

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }
  handleSnackBarClose = () => {
    this.setState({ signupSnackBar: false });
  };

  render () {
    const { vertical, horizontal } = this.state;
    return (
      <div>
            <div align='center'>
              <br />
              <div>
                <LoginForm2
                  handleClick={this.handleClick}
                  handleClickShowPassword={this.handleClickShowPassword}
                  handleMouseDownPassword={this.handleMouseDownPassword}
                  handleChange={this.handleChange}
                  showPassword={this.state.showPassword}
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
    )
  }
}
const style = {
  margin: 5
}
export default Login
