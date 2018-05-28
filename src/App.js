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

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loggedIn: auth.loggedIn(),
      events: [],
      publicUserId: '',
      currentUserEvents: [],
      eventsAttending:[],
    }

    let publicUserId
  }

  componentDidMount = () =>{

    // check if user is logged in and perfome some operations if he is
    if (auth.loggedIn()) {
      this.publicUserId = auth.getProfile().public_id
      this.setState({ publicUserId: this.publicUserId })

      this.getCurrentUserEvents()
    } else {
      this.state.publicUserId = null
    }

    //fetch all events
    auth.fetch(EVENTS_BASE_URL )
      .then(res => {
        this.setState({ events: res })
      })
      .catch(error => {
        console.log("Fetch events error :", error)
      })

  }

//User Authentication related functions

logout = () => {
  //calls the logout function and clears user from the local storage
  auth.logout()
  this.setState({ loggedIn: false })
  window.location.href = '/'

}

 

//get events details of currently logged in user

//get current user events  ## /api/v1/events/user/<string:public_user_id>
getCurrentUserEvents = () => {
    auth.fetch(EVENTS_BASE_URL + '/user/' + this.publicUserId )
    .then(res => {
      this.setState({ currentUserEvents: res })
    })
    .catch(error => {
      console.log("Current User Error :", error)
    })
    
  }

  //get the events attending ///api/v1/events/rsvp/<string:public_user_id>
  getCurrentUserEventsAttending =()=> {
    auth.fetch(EVENTS_BASE_URL +'/rsvp/' + this.publicUserId)
    .then(res => {
      this.setState({ eventsAttending: res })
    })
    .catch(error => {
      console.log("Current User Error :", error)
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
          loggedIn: this.state.loggedIn,
          publicUserId: this.state.publicUserId,
          createNewEvent: this.createNewEvent,
          getCurrentUserEvents: this.getCurrentUserEvents,
          eventsAttending: this.state.eventsAttending,
          numOfEventsAttending : this.state.eventsAttending.length,
          numOfOwnEvents : this.state.currentUserEvents.length
        }}
      >

        {this.props.children}
        <Routes />

      </MyContext.Provider>
    )
  }
}
  