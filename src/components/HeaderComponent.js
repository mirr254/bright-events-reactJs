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
import UserProfilePage from '../pages/UserProfilePage';
import AllEvents from '../pages/AllEventsPage';


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
  }
}

let anchorEl = null


const loginLink = props => <Link to='/login' {...props} /> // necessary to prevent unexpected unmounting
const signupLink = props => <Link to='/signup' {...props} />
const homeLink = props => <Link to='/' {...props} />


class CustomHeader extends Component {
  constructor (props) {
    super(props)
    this.state = {
      toolTipOpen: false,
      anchorEl: null,
      searchValue: null,
      eventsSearched: []
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

  handleSearch = () => {

    console.log(this.state.searchValue)

    axios.get( EVENTS_BASE_URL+'/search?q='+this.state.searchValue )
    .then(res => {
      this.setState({ 
        eventsSearched: res.data,
      });
     <AllEvents events={this.state.eventsSearched} />
      console.log("Events Searched : ", this.state.eventsSearched);
    })
    .catch(error => {
      console.log(error)
    })

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
                  {/* use context to check if user is logged in  */}
                  {context.state.loggedIn
                    ? <div>
                      <div>
                        <IconButton
                          aria-owns={open ? 'menu-appbar' : null}
                          aria-haspopup='true'
                          onClick={this.handleMenu}
                          color='inherit'
                          >
                          <AccountCircle />
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
        <Tooltip title="Search by event name">
        <SearchBar
          onChange={(searchValue) => this.setState({searchValue})}
          onRequestSearch={this.handleSearch}
          style={{
            margin: '0 auto',
            maxWidth: '30%'
          }}
          hintText={'Search event by name'}
        />
        </Tooltip>
        </div> 
      </div>
      // {/* <div className={classes.toolbar} /> */}
    )
  }
}

CustomHeader.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CustomHeader)
