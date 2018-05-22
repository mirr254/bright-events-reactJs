import Routes from './Routes'
import React, { Component } from 'react'
import AuthService from './utils/AuthService'
import axios from 'axios'
import jwt_decode from 'jwt-decode';
import { EVENTS_BASE_URL } from './utils/ConstVariables';


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
      publicUserId: null
    }
  }

  logout = () => {
    //calls the logout function and clears user from the local storage
    auth.logout()
    this.setState({ loggedIn: false })
    window.location.href = '/'

  }

 componentDidMount() {
   axios.get(eventsBaseUrl).then(res => {
    const events = res.data
    this.setState({ events })
  })

  //call the function to get user profile
   { auth.loggedIn() ? this.getUserProfile() : this.state.publicUserId=null}
  }

  getUserProfile = () => {
    this.setState({
      publicUserId: auth.getProfile().public_id 
    }) 
  }

  createNewEvent = ( data ) => {
    auth.addEvent(EVENTS_BASE_URL, data)
    .then( res => {
      //do something or update state
      console.log("CREATE MESSAGE :", res);
      

    })
    .catch( error=> {
      console.log("CREATE ERR :", error.message);
      
    })
  }
  

  render () {
    return (
      // Provides the data it gets from the API call to other components that may need
      <MyContext.Provider
        value={{
          state: this.state,
          logout: this.logout,
          events: this.state.events,
          publicUserId: this.state.publicUserId,
          createNewEvent: this.createNewEvent
        }}
      >

        {this.props.children}
        <Routes />

      </MyContext.Provider>
    )
  }
}
