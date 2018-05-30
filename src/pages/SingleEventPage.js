import React from 'react'
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
import MyContext from '../App'
import { EVENTS_BASE_URL } from '../utils/ConstVariables'
import Menu, { MenuItem } from 'material-ui/Menu'
import Snackbar from '@material-ui/core/Snackbar'
import Slide from '@material-ui/core/Slide'
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class EventViewCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded: false,
      singleEvent: {},
      toolTipOpen: false,
      anchorEl: null,
      eventId: null,
      snackBaropen: false,
      snackBarTransition: null,
      attending : false,
      rsvp: 'not attending',
    }

    this.Auth = new AuthService()
    var eventId
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
    this.setState({ anchorEl: event.currentTarget })
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
      console.log('logged in', !!this.Auth.loggedIn())
    }
    this.setState({ eventId: this.props.match.params.id })
  }
  // this method called right after render method
  componentDidMount = () => {
    
    this.getSingleEvent()

    // this.deleteEvent(this.eventId, "'method':'Delete'")
  }

  getSingleEvent = () => {
    console.log("event ID: ",this.state.eventId);
    this.Auth
      .fetch(EVENTS_BASE_URL + '/' + this.state.eventId)
      .then(res => {
        this.setState({ singleEvent: res })
        console.log('Single Event', this.state.singleEvent)
      })
      .catch(error => {
        console.log(error)
      })
  }

  // call the fetch method with delete option as the arguement
  deleteEvent = () => {
    this.Auth
      .delete(EVENTS_BASE_URL + '/' + this.state.eventId)
      .then(res => {
        console.log('Delete: ', res)
        // redirect user after succefull delete
        // this.props.history.push('/')
      })
      .catch(error => {
        this.showSnackBar(this.TransitionDown)
        console.log('Delete Error: ', error.message)
      })
  }

  handleRsvpChange = name => event => {
    if(event.target.checked){
      this.setState({ rsvp: 'attending' });
    }else{
      this.setState({ rsvp: 'not attending' });
    }
    
    //this.setState({rsvp: })
    console.log( event.target.value );
    console.log(this.state.rsvp);
    
    
  };

  render () {
    const { classes } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div>
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
                      <MenuItem onClick={this.handleClose}>Edit </MenuItem>
                      <MenuItem onClick={this.deleteEvent}>Delete</MenuItem>
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
              {/* <IconButton aria-label='Add to favorites'>
                <FavoriteIcon onClick={this.showRsvp} />
              </IconButton>
              <IconButton aria-label='Share'>
                <ShareIcon />
              </IconButton> */}
              <FormControlLabel
                control={
                  <Switch
                    checked={this.state.checkedA}
                    onChange={this.handleRsvpChange('attending')}
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

export default withStyles(styles)(EventViewCard)
