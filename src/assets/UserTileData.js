import React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ViewListIcon from '@material-ui/icons/ViewList';
import CreateIcon from '@material-ui/icons/Create';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MailIcon from '@material-ui/icons/Mail';
import DeleteIcon from '@material-ui/icons/Delete';
import ReportIcon from '@material-ui/icons/Report';
import { Link } from 'react-router-dom';

export const eventsFolderListItems = (
    <div>
        <ListItem button component={Link} to='/'>
            <ListItemIcon>
                <ViewListIcon />
            </ListItemIcon>
            <ListItemText primary="All Events" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <StarIcon />
            </ListItemIcon>
            <ListItemText primary="My Events" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Events attending" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <CreateIcon />
            </ListItemIcon>
            <ListItemText primary="New Event" />
        </ListItem>
    </div>
);

export const profileFolderListItems = (
    <div>
        <ListItem button>
            <ListItemIcon>
                <MailIcon />
            </ListItemIcon>
            <ListItemText primary="My details" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <DeleteIcon />
            </ListItemIcon>
            <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <ReportIcon />
            </ListItemIcon>
            <ListItemText primary="Spam" />
        </ListItem>
    </div>
);