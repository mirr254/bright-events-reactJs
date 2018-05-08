import Routes from './Routes'
import React, { Component, Fragment } from 'react'
import CustomHeader from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import AllEvents from './pages/AllEventsPage'
import AuthService from "./components/AuthService";

// make a new context
export const MyContext = React.createContext()
const auth = new AuthService

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      loggedIn: auth.loggedIn()
    }
  }

  logout = () => {
    // auth.logout()
    // this.setState({ loggedIn: false })
    console.log('am out')
  }
  render () {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          logout: this.logout
        }}
      >

        {this.props.children}
        <Routes />

      </MyContext.Provider>
    )
  }
}


