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
import AccountCircle from '@material-ui/icons/AccountCircle'


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
      anchorEl: null
    }
  }

  // handle menu oper`tions
  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  // close the menu
  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  //take user to dashboard
  takeUserToDashboard = (userId) =>{
    <Link  to={`/user/${userId}`}/>
    
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
                      {/* <Button color='inherit' onClick={context.logout}> Logout </Button>  */}

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
                          <MenuItem onClick={this.takeUserToDashboard(context.publicUserId)}>
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
      </div>
    )
  }
}

CustomHeader.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(CustomHeader)
