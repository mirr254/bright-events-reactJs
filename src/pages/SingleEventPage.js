import React, { Fragment} from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import classnames from 'classnames'
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions
} from 'material-ui/Card'
import Collapse from 'material-ui/transitions/Collapse'
import Avatar from 'material-ui/Avatar'
import IconButton from 'material-ui/IconButton'
import Typography from 'material-ui/Typography'
import red from 'material-ui/colors/red'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import Tooltip from '@material-ui/core/Tooltip'
import AuthService from '../utils/AuthService'
import axios from 'axios'
import {MyContext} from '../App'
import { EVENTS_BASE_URL } from '../utils/ConstVariables';
import Menu, { MenuItem } from 'material-ui/Menu';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Link } from 'react-router-dom';


class EventViewCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      expanded: false,
      singleEvent: {},
      toolTipOpen: false,
      anchorEl: null,
      eventId: null,
      snackBaropen: false,
      snackBarTransition: null,
      attending: false,
      rsvp: 'not attending',
      publicUserId: null,
      checkedA: false,
      res: {},
      newRsvp: false,
      eventUserId: null
    };

    this.Auth = new AuthService()
    var eventId;
    var publicUserId;
  }

  // for snackbars
  TransitionDown = props => {
    return <Slide {...props} direction='down' />
  }

  handleSnackClose = () => {
    this.setState({ snackBaropen: false })
  }

  showSnackBar = Transition => () => {
    this.setState({ snackBaropen: true, Transition })
  }

  // handle opening or hiding tooltip on mouse hover
  handleTooltipClose = () => {
    this.setState({ toolTipOpen: false })
  }

  handleTooltipOpen = () => {
    this.setState({ toolTipOpen: true })
  }

  // handle menu oper`tions
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  }

  // close the menu
  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  componentWillMount = () => {
    if (!this.Auth.loggedIn()) {
      this.props.history.replace('/login')
    }else{
    this.setState({ 
      eventId: this.props.match.params.id,
      publicUserId: this.Auth.getProfile().public_id
    })
  }
  }
  // this method called right after render method
  componentDidMount = () => {

    this.getSingleEvent();
    //get the rsvp status
    this.getRsvpStatus( this.state.publicUserId );
    
  }

  // The functions below are for EVENTS
  getSingleEvent = () => {
    
    this.Auth
      .fetch(EVENTS_BASE_URL + '/' + this.state.eventId)
      .then(res => {
        this.setState({ 
          singleEvent: res,
          eventUserId: res.public_userid
        })
        console.log("Event : ", res);
        console.log("Event user id : ", res.public_userid);
      })
      .catch(error => {
        console.log(error)
      })
  }

  // handle edit of events
  handleEdit = () => {

  }
  // call the fetch method with delete option as the arguement
  deleteEvent = () => {
    this.Auth
      .delete(EVENTS_BASE_URL + '/' + this.state.eventId)
      .then(res => {
        console.log('Delete: ', res)
        // redirect user after succefull delete
        this.props.history.replace('/events/myevents')
      })
      .catch(error => {
        this.showSnackBar(this.TransitionDown)
        console.log('Delete Error: ', error.response)
      })
      this.setState({ anchorEl: null })
  }

  handleRsvpChange = (name, publicUserId) => event => {
    
    console.log("Rsvp status: ", this.state.rsvp_status);
    

    if(event.target.checked){
      this.setState({ rsvp: 'attending' });
      this.setState({checkedA: true})
      //rsvp as attending
      //check if new event
      this.state.newRsvp
      ? 
      this.makeRsvp({ eventId: this.state.eventId, userId: publicUserId, rsvp:'attending' , method: 'post'}) //make new rsvp
      :
      this.makeRsvp( { eventId: this.state.eventId, userId: publicUserId, rsvp:'attending' , 
                       method: 'put', rsvpId: this.state.res.rsvp_id} )


    }else{
      this.setState({ rsvp: 'not attending' });
      this.setState({checkedA: false})
      //edit rsvp
      this.state.newRsvp
      ? 
      this.makeRsvp({ eventId: this.state.eventId, userId: publicUserId, rsvp:'not attending' , method: 'post'}) //make new rsvp
      :
      this.makeRsvp( { eventId: this.state.eventId, userId: publicUserId, rsvp:'not attending' , 
                       method: 'put', rsvpId: this.state.res.rsvp_id} )
      
    }
    
  };


  //Functions below deal with rsvp

  //rsvp to an event
  makeRsvp = ( {eventId, userId, rsvp, rsvpId, method} ) => {
    //
      const headers = {
        Accept: 'application/json',
        'content-type': 'application/json'
      }
      headers['x-access-token'] = this.Auth.getToken()

      var config = {
        headers : headers
      }
      
      console.log('OPTIONS :', eventId, userId, {rsvp} );
      method === 'post' ?
      
      axios.post(EVENTS_BASE_URL+'/'+eventId+'/rsvp', JSON.stringify( {rsvp} ), config)
          .then(function (response) {
            console.log(response.data);
            if (response.data.code === 201) {
                console.log("Successfully responded to the event");
                
            }
        })
        .catch(function (error) {
            console.log('erro', error.response.data.message);
        })
      
        :
        axios.put(EVENTS_BASE_URL+'/'+eventId+'/rsvp/'+rsvpId, JSON.stringify( {rsvp} ), config)
          .then(function (response) {
            console.log(response.data);
            if (response.data.code === 201) {
                console.log("Successfully changed your response to the event", {rsvp});
                
            }
        })
        .catch(function (error) {
            console.log('erro', error.response);
        })
        
        
  }

  
  // get events rsvp
  getRsvpStatus = (userid) => {
    this.Auth
      .fetch(EVENTS_BASE_URL + '/rsvp/'+this.state.eventId+'/' + userid)
      .then(res => {
        console.log('Event Response: ', res)

          this.setState({ response: res })
          //change the status now
          if(res['rsvp'] === 'attending'){
            this.setState({
              checkedA: true,
              rsvp: 'attending',
              res
            });
            console.log('Response State', this.state.res.rsvp_id );
          }else if(res['rsvp'] === 'not attending'){
            this.setState({
              checkedA: false,
              rsvp: 'not attending',
              res
            });
          }

      })
      .catch(error => {
        console.log('Error Message :',error.response)
        this.setState({
          checkedA: false,
          rsvp: 'not attending',
          newRsvp: true
        });
      })

      
  }


  render () {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
         <MyContext.Consumer>
          
          {context => (
            <Fragment>
              
              <br />
              <div align='center'>
                <Card className={classes.card}>
                  <CardHeader
                    avatar={
                      <Avatar aria-label='Recipe' className={classes.avatar}>
                        R
                      </Avatar>
                    }
                    action={
                      <Tooltip
                        enterDelay={100}
                        id='tooltip-controlled'
                        leaveDelay={300}
                        onClose={this.handleTooltipClose}
                        onOpen={this.handleTooltipOpen}
                        open={this.state.toolTipOpen}
                        placement='right'
                        title='Event Actions'
                      >
                        <div>
                          <IconButton
                            aria-owns={open ? 'menu-appbar' : null}
                            aria-haspopup='true'
                            onClick={this.handleMenu}
                            color='inherit'
                          >
                            <MoreVertIcon />
                          </IconButton>
                          
                          <Menu
                            id='menu-appbar'
                            anchorEl={anchorEl}
                            anchorOrigin={{
                              vertical: 'top',
                              horizontal: 'right'
                            }}
                            transformOrigin={{
                              vertical: 'top',
                              horizontal: 'right'
                            }}
                            open={open}
                            onClose={this.handleClose}
                          >
                          { this.editEventComponentLink = props => <Link to={{pathname: `/events/edit-event`, state: this.state.singleEvent }} {...props} />}
                            <MenuItem 
                              disabled={ this.state.eventUserId !== this.state.publicUserId ? true : false } 
                              component={this.editEventComponentLink}
                              onClick={this.handleEdit}>Edit </MenuItem>
                            <MenuItem 
                                disabled={ 
                                  this.state.eventUserId !== this.state.publicUserId ? true : false
                                }
                                onClick={this.deleteEvent}>Delete</MenuItem>
                          </Menu>
                        </div>

                      </Tooltip>
                    }
                    title={this.state.singleEvent.name}
                    subheader={this.state.singleEvent.date}
                  />

                  <CardMedia
                    className={classes.media}
                    image='/images/im1.JPG'
                    title='Contemplative Reptile'
                  />
                  <CardContent>
                    <Typography component='p'>
                      location : {this.state.singleEvent.location}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.actions} disableActionSpacing>
                   
                    <FormControlLabel
                      control={
                        
                        <Switch
                        disabled={ 
                          this.state.eventUserId === this.state.publicUserId ? true : false
                        }
                          checked={this.state.checkedA}
                          onChange={this.handleRsvpChange('attending', context.publicUserId)}
                          value={this.state.rsvp}
                        />
                      }
                      label={this.state.rsvp}
                    />
                    <IconButton
                      className={classnames(classes.expand, {
                        [classes.expandOpen]: this.state.expanded
                      })}
                      onClick={this.handleExpandClick}
                      aria-expanded={this.state.expanded}
                      aria-label='Show more'
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </CardActions>
                  <Collapse in={this.state.expanded} timeout='auto' unmountOnExit>
                    <CardContent>
                      <Typography paragraph variant='body2'>
                        {this.state.singleEvent.description}
                      </Typography>

                    </CardContent>
                  </Collapse>
                </Card>
                <Snackbar
                  open={this.state.snackBaropen}
                  onClose={this.handleSnackClose}
                  TransitionComponent={this.state.snackBarTransition}
                  ContentProps={{
                    'aria-describedby': 'message-id'
                  }}
                  message={<span id='message-id'>I love snacks</span>}
                />

              </div>
            </Fragment>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}

EventViewCard.propTypes = {
  classes: PropTypes.object.isRequired
}
const styles = theme => ({
  card: {
    maxWidth: '40%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%' // 16:9
  },
  actions: {
    display: 'flex'
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    }),
    marginLeft: 'auto'
  },
  expandOpen: {
    transform: 'rotate(180deg)'
  },
  avatar: {
    backgroundColor: red[500]
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
})

export default withStyles(styles)(EventViewCard);