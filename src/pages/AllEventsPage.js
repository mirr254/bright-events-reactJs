import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { MyContext } from '../App';
import { Link} from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        // width: 900,
        // height: 450,
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
});

function AllEvents (props) {
  const { classes, events } = props


  return (
  <div>
  <MyContext.Consumer>
    {context => (
        
      <div>
        {console.log( "EVENTS proped: ", props.events)}
        

        <GridList cellHeight={300} className={classes.gridList} cols={3}>
          <GridListTile key='Subheader' cols={3} style={{ height: 'auto' }}>
          </GridListTile>
          {props.events.map(event => (
            <GridListTile key={event.id}>
              <img src='/images/im1.JPG' alt={event.name} />

              <Tooltip title="Click on the exclamation to view event details">
              <GridListTileBar
                title={event.title}
                subtitle={<span>Cost: {event.cost}</span>}
                actionIcon={       
                  <Link to={`/events/${event.id}`} >
                    <IconButton  className={classes.icon}>
                        <InfoIcon />
                    </IconButton>
                  </Link>
                }
              />
              </Tooltip >
            </GridListTile>

          ))}
        </GridList>

      </div>
    )}

  </MyContext.Consumer>

</div>


  )
}

AllEvents.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AllEvents);
