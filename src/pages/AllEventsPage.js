import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import Subheader from 'material-ui/List/ListSubheader';
import IconButton from 'material-ui/IconButton';
import InfoIcon from '@material-ui/icons/Info';

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
        img: '/images/im3.JPG',
        title: 'Image1',
        author: 'author1',
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
        img: '/images/im4.JPG',
        title: 'Image4',
        author: 'author4',
    },
  
  ];
function AllEvents(props) {
    const { classes } = props;

    return (
        
            <GridList cellHeight={300} className={classes.gridList} cols={3}>
                <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
                    <Subheader component="div">All Events</Subheader>
                </GridListTile>
                {tileData.map(tile => (
                    <GridListTile key={tile.img} >
                        <img src={tile.img} alt={tile.title} />
                        <GridListTileBar
                            title={tile.title}
                            subtitle={<span>by: {tile.author}</span>}
                            actionIcon={
                                <IconButton className={classes.icon}>
                                    <InfoIcon />
                                </IconButton>
                            }
                        />
                    </GridListTile>
                ))}
            </GridList>
        
    );
}

AllEvents.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AllEvents);
