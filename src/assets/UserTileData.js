import React, {Component, Fragment} from 'react'
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import ViewListIcon from '@material-ui/icons/ViewList'
import CreateIcon from '@material-ui/icons/Create'
import StarIcon from '@material-ui/icons/Star'
import SendIcon from '@material-ui/icons/Send'
import MailIcon from '@material-ui/icons/Mail'
import DeleteIcon from '@material-ui/icons/Delete'
import ReportIcon from '@material-ui/icons/Report'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import Badge from 'material-ui/Badge'
import { MyContext } from '../App'

export const EventsFolderListItems = props => {
  return (
    <div>
      <MyContext.Consumer>

        {context => (
          
          <Fragment>
            <ListItem button component={Link} to='/'>
              <ListItemIcon>
                <ViewListIcon />
              </ListItemIcon>
              <ListItemText primary='All Events' />
            </ListItem>
            <Link to={`/user/${props.userId}/my-events`}>
              <ListItem button>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <Badge badgeContent={
                        context.numOfOwnEvents
                        } 
                   color='secondary'>
                  <ListItemText primary='My Events' />
                </Badge>
              </ListItem>
            </Link>
            <ListItem button>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <Badge badgeContent={
                        context.numOfEventsAttending 
                      } color='primary'>
                <ListItemText
                  primary='Events attending'
                  component={Link}
                  to={`/user/${props.userId}/events-attending`}
                />
              </Badge>
            </ListItem>

            <Link to={`/user/${props.userId}/new-event`}>
              <ListItem button>
                <ListItemIcon>
                  <CreateIcon />
                </ListItemIcon>
                <ListItemText primary='New Event' />
              </ListItem>
            </Link>
          </Fragment>
        )}
      </MyContext.Consumer>

    </div>
  )
}

export const ProfileFolderListItems = props => {
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary='My details' />
      </ListItem>

      <ListItem button>
        <ListItemIcon>
          <ReportIcon />
        </ListItemIcon>
        <Badge badgeContent={2} color='secondary'>
          <ListItemText
            primary='Past Events'
            onClick={() => props.onSelectChange('pastEvents')}
          />
        </Badge>
      </ListItem>

    </div>
  )
}
