import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import LoginForm2 from '../components/LoginFormComponent'
import CustomHeader from '../components/HeaderComponent'
import AuthService from '../utils/AuthService'
import { MyContext } from '../App'
import Snackbar from '@material-ui/core/Snackbar';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';
import USERNAME_COOKIE_KEY from '../utils/ConstVariables';

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
     const result = this.Auth.login(this.state.username, this.state.password)
    //  console.log('LOGIN response :', Promise.result );

     result.then((res) =>{
        if (res === 401 ) {
          //error could not login in
          this.setState({ 
            errorMsg: "Wrong username or password",
            signupSnackBar: true,
            buttonLoading: false,
        })
        } else {
          this.props.history.replace('/');
                this.setState({ 
                    errorMsg: "Login successfull",
                    signupSnackBar: true,
                    buttonLoading: false,
                })
          
        }
        // this.props.history.replace('/');
        console.log('LOGIN response :', res);
        
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
