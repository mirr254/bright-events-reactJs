import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  AutoComplete
} from 'material-ui'
import { Link } from 'react-router-dom'
import { MyContext } from '../App'

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flex: 1
  }
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
          <Fragment> { /* <--provides an empty tag */}
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
                {/* check if user is logged in  */}
                {context.state.loggedIn
                  ? <Button color='inherit' onClick={context.logout}>
                      Logout
                    </Button>
                  : <Button color='inherit' component={loginLink}>
                      Login
                    </Button>}

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
