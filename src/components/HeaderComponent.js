import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
} from 'material-ui'
import Avatar from 'material-ui/Avatar'
import deepPurple from 'material-ui/colors/deepPurple'
import { Link } from 'react-router-dom'
import { MyContext } from '../App'

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
    backgroundColor: deepPurple[500],
  },
}
const loginLink = props => <Link to='/login' {...props} /> // necessary to prevent unexpected unmounting
const signupLink = props => <Link to='/signup' {...props} />
const homeLink = props => <Link to='/' {...props} />

const CustomHeader = props => {
  const { classes } = props

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
                  ? <Button color='inherit' onClick={context.logout}> Logout </Button>
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

  CustomHeader.propTypes = {
    classes: PropTypes.object.isRequired
  }
}

export default withStyles(styles)(CustomHeader)
