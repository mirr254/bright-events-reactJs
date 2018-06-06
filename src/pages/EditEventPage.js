import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import List from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import {
  EventsFolderListItems,
  ProfileFolderListItems
} from '../assets/UserTileData';
import AllEvents from './AllEventsPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EventForm from '../components/EventFormComponent';
import AuthService from '../utils/AuthService';
import {MyContext} from '../App';
import { EVENTS_BASE_URL } from '../utils/ConstVariables';
import axios from 'axios';

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '70%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
})

const auth = new AuthService()

class EditEventPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      eventData: {},
      loggedIn: false,
      pictures: {},
      eventName: '',
      eventLocation: '',
      eventDate: '',
      eventCost: 0,
      eventDescription: '',
      eventCategory: '',
      eventImgUrl: '',
      
    }
    this.Auth = new AuthService()
  }

  componentWillMount = () => {
    if (!this.auth.loggedIn()) {
      this.props.history.replace('/login')
      console.log('logged in', !!this.Auth.loggedIn())
    }
    
  }

  componentDidMount = () => {
    console.log("props :",this.props.component);
    console.log('*****');
    
  }
  handleChange = prop => event => {
   
    this.setState({ [prop]: event.target.value})
    
    this.setState({ 
        eventData: {
          name: this.state.eventName,
          location: this.state.eventLocation,
          date: this.state.eventDate.replace( new RegExp("T","gi"), " "),
          cost: parseInt( this.state.eventCost),
          category: this.state.eventCategory,
          description: this.state.eventDescription,
          // eventImgUrl: this.state.eventImgUrl
        }
    }) 
  
    console.log('State :', this.state)
    
  }

//create event details
handleClick = (event) => {
 
  //
  const headers = {
    Accept: 'application/json',
    'content-type': 'application/json'
  }
  headers['x-access-token'] = auth.getToken()

  var config = {
    headers : headers
  }
    axios.put(EVENTS_BASE_URL+'/'+event_id , JSON.stringify(this.state.eventData), config)
    .then(function (response) {
      console.log(response);
      if (response.data.code === 201) {
          console.log("Successfully added a new event");
      }
  })
  .catch(function (error) {
      console.log('erro', error.response.data.message);
  })

}

onClickEdit = (event_id) => {
  //
  const headers = {
    Accept: 'application/json',
    'content-type': 'application/json'
  }
  headers['x-access-token'] = this.Auth.getToken()

  var config = {
    headers : headers
  }
    axios.put(EVENTS_BASE_URL+'/'+event_id , JSON.stringify(this.state.eventData), config)
    .then(function (response) {
      console.log(response);
      if (response.data.code === 201) {
          console.log("Successfully added a new event");
      }
  })
  .catch(function (error) {
      console.log('erro', error.response.data.message);
  })

}


  render () {
    const { classes } = this.props

    return (
      <div>
        <MyContext.Consumer>
          
          {context => (
            <Fragment>
              <div className={classes.root}>
            
              <main className={classes.content}>
                <div className={classes.toolbar} >
                  <Typography > New Event </Typography>
                </div>
                <EventForm 
                  handleChange = {this.handleChange}
                  submitEventDetails = { this.submitEventDetails}
                  onFileLoad = {this.onFileLoad}
                  onClick = {this.handleClick}
                  data={this.props.location.state}
                />
                
                
              </main>
            </div>
            </Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

EditEventPage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(EditEventPage)
