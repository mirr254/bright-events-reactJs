import jwt_decode  from 'jwt-decode'
import axios from 'axios'

export default class AuthService {
  // initialize important variables
  constructor (domain) {
    this.domain = domain || 'https://brighter-event.herokuapp.com/api/v1/auth/'
  }

  login = (username, password) => {
    // get a token from the api server using the promise api
    console.log('data', username + ' ' + password)
    const requestPromise = require('request-promise')
    var apiBaseUrl = 'https://brighter-event.herokuapp.com/api/v1/auth/'
    // encode data with base64 for the authentication
    const base64encodedData = new Buffer(username + ':' + password).toString(
      'base64'
    )

    return requestPromise
      .get({
        uri: apiBaseUrl + 'login',
        headers: {
          Authorization: 'Basic ' + base64encodedData
        },
        json: true
      })
      .then(function ok (jsonData) {
        //console.log("Login Data", Promise.resolve(jsonData))
        localStorage.setItem('id_token', jsonData.token)
        return Promise.resolve(jsonData)
      })
      .catch(function fail (error) {})
  }



  loggedIn = () => {
    // check if there is savrd token and it's still valid
    const token = this.getToken() // get token from local storage
    return !!token && !this.isTokenExpired(token)
  }

  isTokenExpired = token => {
    try {
      const decoded = jwt_decode(token)
      if (decoded.exp < Date.now() / 1000) {
        return true
      } else return false
    } catch (err) {
      return false
    }
  }

  getToken = () => {
    // Retrieves the user token from localStorage
    return localStorage.getItem('id_token')
  }

  logout = () => {
    // Clear user token and profile data from localStorage
    localStorage.removeItem('id_token')
  }

  getProfile = () => {
    // Using jwt-decode npm package to decode the token
    if (this.loggedIn()) {
      return jwt_decode(this.getToken())
    }
    return null;
    
  }


  fetch = (url, options) => {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: 'application/json',
      'content-type': 'application/json'
    }
    // set the authorization header
    if (this.loggedIn()) {
      headers['x-access-token'] = this.getToken()
    }

    return fetch(url, {
      headers,
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json())
  }

  delete = (url, options) => {
    // performs api calls sending the required authentication headers
    const headers = {
      Accept: 'application/json',
      'content-type': 'application/json'
    }
    // set the authorization header
    if (this.loggedIn()) {
      headers['x-access-token'] = this.getToken()
    }

    //delete the event
    return fetch(url, {
      headers,
      method: 'Delete',
      ...options
    })
      .then(this._checkStatus)
      .then(response => response.json())
  }

  // edit rsvp status
  editRsvp = (url, options) => {

  }

  _checkStatus = response => {
    // raises an error incase response status is not a success
    if (response.status >= 200 && response.status < 300) {
      // Success status lies between 200 to 300
      return response
    } else {
      var error = new Error(response)
      error.response = response
      throw error
    }
  }
}
