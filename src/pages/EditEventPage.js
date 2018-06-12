import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import List from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import AllEvents from './AllEventsPage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EventForm from '../components/EventFormComponent';
import AuthService from '../utils/AuthService';
import {MyContext} from '../App';
import { EVENTS_BASE_URL } from '../utils/ConstVariables';
import axios from 'axios';
import Snackbar from '@material-ui/core/Snackbar';

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

export class EditEventPage extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data: {},
      newEventData: {},
      //data
      name: this.props.location.state.name,
      location: this.props.location.state.location,
      date: this.props.location.state.date,
      cost: this.props.location.state.cost,
      description: this.props.location.state.description,
      category: this.props.location.state.category,
      eventId: this.props.location.state.event_id,
      
      loggedIn: false,
      //snackbar
      signupSnackBar: false,
      vertical: 'bottom',
      horizontal: 'center',
      errorMsg:'initial msg',
      buttonLoading: false,
      
    }
    this.Auth = new AuthService()
  }

  componentWillMount = () => {
    if (!this.Auth.loggedIn()) {
      this.props.history.replace('/login')
      console.log('logged in', !!this.Auth.loggedIn())
    }else{
      this.setState({
        data: this.props.location.state,
        eventId: this.props.location.state.event_id
      })
    }
    
  }

  handleChange = props => event => {
    console.log("Values changed", props ,event.target.value);

    this.setState({ [props]: event.target.value})
  
    console.log("State change: ", this.state);

    this.setState({ 
      newEventData: {
        name: this.state.name,
        location: this.state.location,
        date: this.state.date.replace( new RegExp("T","gi"), " "),
        cost: parseInt( this.state.cost),
        category: this.state.category,
        description: this.state.description,
        // eventImgUrl: this.state.eventImgUrl
      }
  }) 
    
    //this.setState({ newEventData: Object.assign({}, this.state.newEventData, { [props]: event.target.value }) });
    
    
  }

//create event details
handleClick = (event) => {
  this.setState({
    buttonLoading: true,
   })
 
  //
  const headers = {
    Accept: 'application/json',
    'content-type': 'application/json'
  }
  headers['x-access-token'] = auth.getToken()

  var config = {
    headers : headers
  }
  
  console.log("Edited Data: ",this.state.newEventData);
  
    axios.put(EVENTS_BASE_URL+'/'+this.state.eventId, JSON.stringify(this.state.newEventData), config)
    .then( (response) =>{
      if (response.status === 201) {
          
          this.setState({
            buttonLoading: false,
            signupSnackBar: true,
            errorMsg: 'Successfully updated the event '+this.state.data.eventName
           })
           this.props.history.replace('/events/'+this.state.data.event_id)
      }
  })
  .catch((error) =>{
      console.log('Edit Error', error.response);
      this.setState({
        buttonLoading: false,
        signupSnackBar: true,
        errorMsg: error.response.data.message
       })
  })

}


  render () {
    const { classes } = this.props
    const { vertical, horizontal } = this.state;

    return (
      <div>
       
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
                  data={this.state.data}
                  buttonLoading = {this.state.buttonLoading}
                />
                <Snackbar
                    anchorOrigin={{ vertical, horizontal }}
                    open={this.state.signupSnackBar}
                    autoHideDuration={5000}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    onClose={this.handleSnackBarClose}
                    message={<span id="message-id">{this.state.errorMsg}</span>}
               />
                
                
              </main>
            </div>
            </Fragment>
          
      </div>
    )
  }
}

EditEventPage.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(EditEventPage)
