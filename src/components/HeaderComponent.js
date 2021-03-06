import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import { AppBar, Toolbar, Typography, Button } from 'material-ui'
import Avatar from 'material-ui/Avatar'
import deepPurple from 'material-ui/colors/deepPurple'
import { Link } from 'react-router-dom'
import { MyContext } from '../App'
import Menu, { MenuItem } from 'material-ui/Menu'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import IconButton from 'material-ui/IconButton'
import AccountCircle from '@material-ui/icons/AccountCircle';
import SearchBar from 'material-ui-search-bar';
import axios from 'axios';
import { EVENTS_BASE_URL } from '../utils/ConstVariables';
import HomePage from '../pages/HomePage';
import Tooltip from '@material-ui/core/Tooltip';
import { Route} from 'react-router-dom';
import AllEvents from '../pages/AllEventsPage';
import AuthService from '../utils/AuthService';


const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  },
  purpleAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500]
  },
}

let anchorEl = null


const loginLink = props => <Link to='/login' {...props} /> // necessary to prevent unexpected unmounting
const signupLink = props => <Link to='/signup' {...props} />
const homeLink = props => <Link to='/' {...props} />
const myEventsLink = props => <Link to='/events/myevents' {...props} />
const auth = new AuthService();

class CustomHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      toolTipOpen: false,
      anchorEl: null,
      searchValue: null,
      eventsSearched: [],
      username: null,
      toolTipOpen: false,
    }

    let dashLink = null
    

  }

  // handle menu oper`tions
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  // close the menu
  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  // handle opening or hiding tooltip on mouse hover
  handleTooltipClose = () => {
    this.setState({ toolTipOpen: false })
  }

  handleTooltipOpen = () => {
    this.setState({ toolTipOpen: true })
  }

  

  render () {
    const { classes } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <div>
        <MyContext.Consumer>
          
          {context => (
               
            <Fragment>
              {' '}{/* <--provides an empty tag */}
              <AppBar position='static'>

                <Toolbar>

                  <Typography
                    component={homeLink}
                    variant='headline'
                    color='inherit'
                    className={classes.flex}
                  >
                    Bright Events
                  </Typography>
                  {
                     context.state.loggedIn ?

                  <Typography
                    component={myEventsLink}
                    variant='headline'
                    color='inherit'
                    className={classes.flex}
                  >
                    My Events
                  </Typography> :
                  null
                  }
                  {/* use context to check if user is logged in  */}
                  {context.state.loggedIn
                    ? <div>
                      <div>
                      <Tooltip
                        enterDelay={100}
                        id='tooltip-controlled'
                        leaveDelay={300}
                        onClose={this.handleTooltipClose}
                        onOpen={this.handleTooltipOpen}
                        open={this.state.toolTipOpen}
                        placement='bottom'
                        title={ this.state.username}
                      >
                        <IconButton
                          aria-owns={open ? 'menu-appbar' : null}
                          aria-haspopup='true'
                          onClick={this.handleMenu}
                          color='inherit'
                          >
                          <AccountCircle />
                        </IconButton>
                      </Tooltip>
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
                          { this.dashLink = props => <Link to={`/user/${context.publicUserId}`} {...props} />}
                          <MenuItem component={this.dashLink} onClick={this.handleClose}  >
                              User Dashboard{' '}
                          </MenuItem>
                          <MenuItem onClick={context.logout}>
                              Logout
                            </MenuItem>
                        </Menu>
                      </div>

                    </div>
                    : <div>
                      {' '}<Button color='inherit' component={loginLink}>
                          Login
                        </Button>
                      <Button color='inherit' component={signupLink}>
                          Signup
                        </Button>
                    </div>}

                </Toolbar>
              </AppBar>
            </Fragment>
          )}
        </MyContext.Consumer>
        <div className={classes.toolbar} >
       
        </div> 
      </div>
    )
  }
}

CustomHeader.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CustomHeader)
