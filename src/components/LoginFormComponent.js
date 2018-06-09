import React from 'react'
import { Button, TextField } from 'material-ui'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import IconButton from 'material-ui/IconButton'
import Input, { InputLabel, InputAdornment } from 'material-ui/Input'
import { FormControl } from 'material-ui/Form'
import { VisibilityOff, AccountCircle, Visibility } from '@material-ui/icons'

// material form 2
const style = {
  margin: 15
}

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    flexBasis: 200
  }
})

const LoginForm2 = props => {
  const { classes } = props

  return (
    <div className={classes.root}>
      <TextField
        label='Username'
        onChange={props.handleChange('username')}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <AccountCircle />
            </InputAdornment>
          )
        }}
        id='simple-start-adornment'
        className={classNames(classes.margin, classes.textField)}
      />
      <br />
      <FormControl className={classNames(classes.margin, classes.textField)}>
        <InputLabel htmlFor='adornment-password'>Password</InputLabel>
        <Input
          id='adornment-password'
          type={props.showPassword ? 'text' : 'password'}
          value={props.password}
          onChange={props.handleChange('password')}
          startAdornment={
            <InputAdornment position='start'>
              <IconButton
                aria-label='Toggle password visibility'
                onClick={props.handleClickShowPassword}
                onMouseDown={props.handleMouseDownPassword}
              >
                {props.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <br />
      <Button
        className="fooo"
        variant='raised'
        color='primary'
        label='Submit'
        primary
        style={style}
        onClick={props.handleClick}
      >
        {props.buttonLoading ? 'Loading...' : 'Login'}
      </Button>
    </div>
  )
}

LoginForm2.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LoginForm2)
