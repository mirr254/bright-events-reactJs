import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import List from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Divider from 'material-ui/Divider'
import {
  EventsFolderListItems,
  ProfileFolderListItems
} from '../assets/UserTileData';

const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '70%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0 // So the Typography noWrap works
  },
  toolbar: theme.mixins.toolbar
})

class UserProfile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      componentTodisplay: null

    }
  }

  //A function to change the state of the component to render at the main
  handleSelectOption = ( componentName ) =>{
    this.setState({
      componentTodisplay: componentName
    })
    console.log(this.state.componentTodisplay)
  }

  render () {
    const { classes } = this.props

    return (
      <div>

        <div className={classes.root}>
          {/* <AppBar position="absolute" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="title" color="inherit" noWrap>
                        User:1w Details
          </Typography>
                </Toolbar>
            </AppBar> */}
          <Drawer
            variant='permanent'
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.toolbar} />
            <List>
              <EventsFolderListItems onSelectChange={this.handleSelectOption} />
            </List>
            <Divider />
            <List>
              <ProfileFolderListItems onSelectChange={this.handleSelectOption} />
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.toolbar} />
            {/* componentToDisplay goes here */}
            <Typography noWrap>
              {'You think water moves fast? You should see ice.'}
            </Typography>
          </main>
        </div>
      </div>
    )
  }
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(UserProfile)
