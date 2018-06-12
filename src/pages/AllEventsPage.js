import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { MyContext } from '../App';
import { Link} from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import SearchBar from 'material-ui-search-bar';
import axios from 'axios';
import {EVENTS_BASE_URL} from '../utils/ConstVariables';
import AuthService from '../utils/AuthService';
import Paper from 'material-ui/Paper';
import Tabs, { Tab } from 'material-ui/Tabs';


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

class AllEvents extends Component {
  constructor(props){
    super(props);
    this.state = {
      events : [],
      searchName : '',
      //pagination
      total: 20,
      display: 7,
      number: 7,
     
    }

    this.auth = new AuthService()
   // console.log("PROPS AlleventsPage  :", this.props.events)
  }

  componentDidMount = () => {

     //fetch all events
     this.auth.fetch(EVENTS_BASE_URL )
     .then(res => {
      console.log(" AlleventsPage - PRopS  :", this.props)
       this.setState({ events: res })
     })
     .catch(error => {
       console.log("Fetch events error :", error)
     })
     
     
  }

  handleSearch = () => {
    axios.get( EVENTS_BASE_URL+'/search?q='+this.state.searchName )
    .then(res => {
      this.setState({ 
        events: res.data,
      });
      console.log("Events Searched : ", this.state.events);
    })
    .catch(error => {
      console.log(error)
    })
  
  }

  //handle tabs/pagination change
  handleTabChange = (event, value) => {
    
    this.setState({value: value })
    console.log("Value : ", value);

    console.log("State Value : ", this.state.value);
    

    //handle api call with page numbers
    axios.get( EVENTS_BASE_URL+'?page='+this.state.value )
    .then(res => {
      this.setState({ 
        events: res.data,
      });
      console.log("Pagination Events Searched : ", res.data);
      console.log("Num of events : ", res.data.length);
    })
    .catch(error => {
      console.log(error)
    })

    
};
  
render(){

    
    const { classes, events } = this.props

    return (
    <div>
    <MyContext.Consumer>
    
      {context => (
            
        <div>
          <Tooltip title="Search by event name">
          <SearchBar
            onChange={(searchName) => this.setState({searchName})
            }
            onRequestSearch={this.handleSearch}
            style={{
              margin: '0 auto',
              maxWidth: '30%'
            }}
            hintText={'Search event by name'}
          />
          </Tooltip>
          

          <GridList cellHeight={300} className={classes.gridList} cols={3}>
            <GridListTile key='Subheader' cols={3} style={{ height: 'auto' }}>
            </GridListTile>
            {this.state.events.map(event => (
              <GridListTile key={event.id}>
                <img src='/images/im1.png' alt={event.name} />

                <Tooltip title="Click on the exclamation to view event details">
                <GridListTileBar
                  title={event.title}
                  subtitle={<span>Event Name: {event.name}</span>}
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
          <div> 
          
          </div>

        </div>
      )}

    </MyContext.Consumer>

  </div>
    )
}}

AllEvents.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AllEvents);
