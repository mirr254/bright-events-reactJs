import Routes from './Routes'
import React, { Component, Fragment } from 'react'
import CustomHeader from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import AllEvents from './pages/AllEventsPage'
import AuthService from './utils/AuthService'
import axios from 'axios'

// make a new context
export const MyContext = React.createContext()
//create a new instance of auth to be used for authentication
const auth = new AuthService()
const eventsBaseUrl = 'https://brighter-event.herokuapp.com/api/v1/events'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: auth.loggedIn(),
      events: [],
    }
  }

  logout = () => {
    auth.logout()
    this.setState({ loggedIn: false })
    window.location.href = '/'

  }

 componentDidMount() {
   axios.get(eventsBaseUrl).then(res => {
    const events = res.data
    this.setState({ events })
    console.log(this.state.events)
  })
      
  }

  
  render () {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          logout: this.logout,
          events: this.state.events,
        }}
      >

        {this.props.children}
        <Routes />

      </MyContext.Provider>
    )
  }
}
