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
import AuthService from '../utils/AuthService'
import axios from 'axios'
import MyContext from '../App'
import { EVENTS_BASE_URL } from '../utils/ConstVariables'

class EventViewCard extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      expanded: false,
      singleEvent: {}
    }

    this.Auth = new AuthService()
    var eventId
  }

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded })
  }

  componentWillMount = () => {
    if (!this.Auth.loggedIn()) {
      this.props.history.replace('/login')
      console.log('logged in', !!this.Auth.loggedIn())
    }
  }
  componentDidMount = () => {
    this.eventId = this.props.match.params.id
    this.getSingleEvent(this.eventId)
  }

  getSingleEvent = id => {
    this.Auth.fetch(EVENTS_BASE_URL + '/' + id).then(res => {
      this.setState({ singleEvent: res })
      console.log('Single Event', this.state.singleEvent)
    })
  }

  render () {
    const { classes } = this.props

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
                <IconButton>
                  <MoreVertIcon />
                </IconButton>
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
              <IconButton aria-label='Add to favorites'>
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label='Share'>
                <ShareIcon />
              </IconButton>
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
  }
})

export default withStyles(styles)(EventViewCard)
