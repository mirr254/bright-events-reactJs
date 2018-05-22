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
import CreateEventFormComponent from '../components/CreateEventFormComponent';
import AllEvents from './AllEventsPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CreateEventForm from '../components/CreateEventFormComponent';
import AuthService from '../utils/AuthService';
import {MyContext} from '../App';

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
    super(props)
    this.state = {
      eventData: {},
      componentTodisplay: null,
      pictures: {},
      eventName: '',
      eventLocation: '',
      eventDate: '',
      eventCost: 0,
      eventDescription: '',
      eventImgUrl: '',
      
    }
  }

  //a list of components to toggle for the user dashboard
   routes = [
     {
       path : "/user/:id/new-event",
       component: <CreateEventFormComponent />
     },
     {
       path : '/user/:id/past-events',
       component: <AllEvents /> //pass date here to get the past events
     },
     {
       path : '/user/:id/events-attending',
       component: <AllEvents userid={this.props.match.id}/> //pass public_user_id  here to get the rsvp'd events
     }

  ]

 handleChange = prop => event => {
   
  this.setState({ [prop]: event.target.value})
  console.log("State :", this.state);
  
}

submitEventDetails = () => {
  //save event details via function


}

  render () {
    const { classes } = this.props

    return (
      <div>
        <MyContext.Consumer>
          
          {context => (
               
            <Fragment>
              <div className={classes.root}>
              {/* <AppBar position="absolute" className={classes.appBar}>
                    <Toolbar>
                        <Typography variant="title" color="inherit" noWrap>
                            User:1w Details
              </Typography>
                    </Toolbar>
                </AppBar> */}
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
                {/* componentToDisplay goes here
                
                {this.routes.map( (route, index ) =>( 
                  
                  <Route 
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                  />
                ) )} */}
                <CreateEventForm 
                  handleChange = {this.handleChange}
                  submitEventDetails = { this.submitEventDetails}
                  onFileLoad = {this.onFileLoad}
                  submitEventDetails = {this.submitEventDetails}
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
