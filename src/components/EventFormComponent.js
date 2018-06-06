import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Input from '@material-ui/core/Input'
import InputLabel from '@material-ui/core/InputLabel'
import InputAdornment from '@material-ui/core/InputAdornment'
import FormControl from '@material-ui/core/FormControl'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button';
import {LocationOn, AccountCircle, DateRange, AttachMoney, Description} from '@material-ui/icons'



const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  imagePaper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: '90%',
  },
  button: {
    margin: theme.spacing.unit,
  },

})

function EventForm (props) {
  const { classes, data } = props

  return (
    <div className={classes.root}>
    {console.log( 'DAta :', data)
    }
      <Grid container spacing={24}>

        <Grid item xs={4} sm={3}>
          <Paper className={classes.imagePaper}>
            image preview
            <input
              accept="image/*"
              className={classes.input}
              id="raised-button-file"
              multiple
              type="file"
              onChange={props.handleChange('eventImgUrl')}
            />
            <label htmlFor="raised-button-file">
              <Button variant="raised" component="span" className={classes.button}>
                Upload
              </Button>
            </label> 
           
          </Paper>
        </Grid>

        <Grid item xs={8} sm={5}>
          <Paper className={classes.paper}>
            <div>

              <div className={classes.margin}>
                <Grid container spacing={8} alignItems='flex-end'>
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <Grid item>
                    <TextField
                      id='input-with-icon-grid'
                      label='Name'
                      InputLabelProps={{
                        shrink: true
                      }}
                      value={ data !== undefined ? data.name : ''}
                      onChange={props.handleChange('eventName')}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.margin}>
                <Grid container spacing={8} alignItems='flex-end'>
                  <Grid item>
                    <AccountCircle />
                  </Grid>
                  <Grid item>
                    <TextField
                      id='input-with-icon-grid'
                      label='Category'
                      InputLabelProps={{
                        shrink: true
                      }}
                      value={data !== undefined ? data.category : ''}
                      onChange={props.handleChange('eventCategory')}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.margin}>
                <Grid container spacing={8} alignItems='flex-end'>
                  <Grid item>
                    <LocationOn />
                  </Grid>
                  <Grid item>
                    <TextField multiline
                      id='input-with-icon-grid'
                      label='Location'
                      InputLabelProps={{
                        shrink: true
                      }}
                      value = {data !== undefined ? data.location : ''}
                      onChange={props.handleChange('eventLocation')}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.margin}>
                <Grid container spacing={8} alignItems='flex-end'>
                  <Grid item>
                    <AttachMoney />
                  </Grid>
                  <Grid item>
                    <TextField
                      type='number'
                      id='input-with-icon-grid'
                      label='Cost'
                      InputLabelProps={{
                        shrink: true
                      }}
                      value = {data !== undefined ? data.cost : ''}
                      onChange={props.handleChange('eventCost')}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.margin}>
                <Grid container spacing={8} alignItems='flex-end'>
                  <Grid item>
                    <DateRange />
                  </Grid>
                  <Grid item>
                    <TextField
                      id='datetime-local'
                      label='Date'
                      type='datetime-local'
                      defaultValue={data !== undefined ? data.date : '2018-05-24T04:20'}
                      InputLabelProps={{
                        shrink: true
                      }}
                      value = {data !== undefined ? data.date : '2018-05-24T04:20'}
                      onChange={props.handleChange('eventDate')}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className={classes.margin}>
                <Grid container spacing={8} alignItems='flex-end'>
                  <Grid item>
                    <Description />
                  </Grid>
                  <Grid item>
                    <TextField multiline
                      id='input-with-icon-grid'
                      label='Description'
                      InputLabelProps={{
                        shrink: true
                      }}
                      value = {data !== undefined ? data.description : ''}
                      onChange={props.handleChange('eventDescription')}
                    />
                  </Grid>
                </Grid>
              </div>
             
              <div >

                {/* check if data has anything and show edit button */}
                { 
                  data !== undefined ? <Button 
                    variant='raised' 
                    color='primary' 
                    className={classes.button}
                    type='submit'
                    //onSubmit={ console.log("Button click", "submit")} 
                    onSubmit={ props.onClickEdit(data.event_id)} >
                    Edit
                  </Button> :

                    <Button 
                    variant='raised' 
                    color='primary' 
                    className={classes.button} 
                    //onSubmit={ console.log("Button click", "submit")} 
                    onClick={ props.onClick('post')} >
                    Save
                    </Button>

                }

              </div>

            </div>
          </Paper>
        </Grid>

      </Grid>
    </div>
  )
}

EventForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(EventForm)
