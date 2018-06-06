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

class UserProfile extends Component {
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
  axios.post(EVENTS_BASE_URL, JSON.stringify(this.state.eventData), config)
          .then(function (response) {
            console.log(response);
            if (response.data.code === 201) {
                console.log("Successfully added a new event");
            }
        })
        .catch(function (error) {
            console.log('erro', error.response.data.message);
        });
}

onClickEdit = (event_id) => {
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

// add redirection if we are already logged in
componentWillMount = () => {
  if ( !auth
.loggedIn()) {
    this.props.history.replace('/')
  }
}


  render () {
    const { classes } = this.props

    return (
      <div>
        <MyContext.Consumer>
          
          {context => (
            <Fragment>
              <div className={classes.root}>
             
              <Drawer
                variant='permanent'
                classes={{
                  paper: classes.drawerPaper
                }}
              >
                {/* <div className={classes.toolbar} /> */}
                
                  <EventsFolderListItems userId={this.props.match.params.id} />
                
                <Divider />
                <List>
                  <ProfileFolderListItems onSelectChange={this.handleSelectOption} />
                </List>
              </Drawer>
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
                  onClickEdit = {this.onClickEdit}
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

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(UserProfile)
