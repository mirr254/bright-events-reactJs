import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import LoginForm2 from '../components/LoginFormComponent';
import CustomHeader from '../components/HeaderComponent';
import AuthService from '../components/AuthService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            showPassword: false,
        }
        this.Auth = new AuthService();

    }
    
    handleClick = event => {
        console.log("States :", this.state)

        let url = "";

        this.Auth.login(this.state.username, this.state.password)
            .then(function ok(res) {
                window.location.href = '/';
               // this.props.history.replace('/');
            }).catch(function fail(error) {
                console.log(error);
                
            }) ;

    }

    //add redirection if we are already logged in
    componentWillMount = ()=>{
        if(this.Auth.loggedIn()){
            this.props.history.replace('/')
        }
    }

    handleChange = prop => event => {
        this.setState({ [prop]: event.target.value });
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