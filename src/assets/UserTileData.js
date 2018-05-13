import React from 'react'
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import ViewListIcon from '@material-ui/icons/ViewList'
import CreateIcon from '@material-ui/icons/Create'
import StarIcon from '@material-ui/icons/Star'
import SendIcon from '@material-ui/icons/Send'
import MailIcon from '@material-ui/icons/Mail'
import DeleteIcon from '@material-ui/icons/Delete'
import ReportIcon from '@material-ui/icons/Report'
import { Link } from 'react-router-dom'
import Badge from 'material-ui/Badge'

export const eventsFolderListItems = (
  <div>
    <ListItem button component={Link} to='/'>
      <ListItemIcon>
        <ViewListIcon />
      </ListItemIcon>
      <ListItemText primary='All Events' />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <StarIcon />
      </ListItemIcon>
      <Badge badgeContent={5} color='secondary'>
        <ListItemText primary='My Events' />
      </Badge>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SendIcon />
      </ListItemIcon>
      <Badge badgeContent={3} color='primary'>
        <ListItemText primary='Events attending' />
      </Badge>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <CreateIcon />
      </ListItemIcon>
      <ListItemText primary='New Event' />
    </ListItem>
  </div>
)

export const profileFolderListItems = (
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
        <ListItemText primary='Past Events' />
      </Badge>
    </ListItem>
    
  </div>
)
