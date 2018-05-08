import Routes from './Routes'
import React, { Component, Fragment } from 'react'
import CustomHeader from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import AllEvents from './pages/AllEventsPage'
import AuthService from "./components/AuthService";

// make a new context
export const MyContext = React.createContext()
const auth = new AuthService

class MyProvider extends Component{
    state = {
     loggedIn: auth.loggedIn()
    }

logout = () => {
  auth.logout()
  this.setState({ loggedIn: false })
}
 render () {
    return (
      <MyContext.Provider
        value={{
          state: this.state
        }}
      >
    
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
export default class App extends Component {
  render () {
    return (
      <div>
        <MyProvider>
          <div>
            <Routes />
          </div>

        </MyProvider>
      </div>
    )
  }
}
