import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { MyContext } from '../App';

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

const tileData = [
    {
        img: './images/im1.JPG',
        title: 'Image2',
        author: 'author2',
    },
    {
        img: '/images/im2.JPG',
        title: 'Image2',
        author: 'author2',
    },
    {
        img: '/images/im3.JPG',
        title: 'Image3',
        author: 'author3',
    },
    {
        img: '/images/im4.JPG',
        title: 'Image4',
        author: 'author4',
    },
    {
        img: '/images/im5.JPG',
        title: 'Image5',
        author: 'author5',
    },
  
  ];

function AllEvents (props) {
  const { classes } = props

  return (
  <div>
  <MyContext.Consumer>
    {context => (
        
      <div>

        <GridList cellHeight={300} className={classes.gridList} cols={3}>
          <GridListTile key='Subheader' cols={3} style={{ height: 'auto' }}>
          </GridListTile>
          {context.events.map(tile => (
            <GridListTile key={tile.id}>
              <img src='./images/im5.JPG' alt={tile.name} />
              <GridListTileBar
                title={tile.title}
                subtitle={<span>Cost: {tile.cost}</span>}
                actionIcon={
                  <IconButton className={classes.icon}>
                    <InfoIcon />
                  </IconButton>
                }
              />
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
