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
import FooterComponent from '../components/FooterComponent';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
    root: {
      width: '85%',
      margin: 'auto',
      position: 'relative',
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

class MyEvents extends Component {
  constructor(props){
    super(props);
    this.state = {
      myEventsData : [],
      searchName : '',
      publicUserId: null
    }

    this.Auth = new AuthService()
   // console.log("PROPS MyEventsPage  :", this.props.events)
  }

  componentDidMount =()=>{

    console.log("Logged in user id :", this.state.publicUserId);
    

   // fetch all user events
//     fetch all events
    this.Auth.fetch(EVENTS_BASE_URL+'/user/'+this.state.publicUserId )
    .then(res => {
    this.setState({ myEventsData: res })
    })
    .catch(error => {
    console.log("Fetch events error :", error)
    })
}

  componentWillMount = () => {
    if (!this.Auth.loggedIn()) {
      this.props.history.replace('/login')
      console.log('MyEvents Page: logged in', !!this.Auth.loggedIn())
    }
    const publicUserId = this.Auth.getProfile().public_id
    this.setState({ publicUserId: publicUserId })

    
  }

  handleSearch = () => {
    axios.get( EVENTS_BASE_URL+'/search?q='+this.state.searchName )
    .then(res => {
      this.setState({ 
        myEventsData: res.data,
      });
      console.log("Events Searched : ", this.state.events);
    })
    .catch(error => {
      console.log(error)
    })
  
  }

  
render(){

    
    const { classes} = this.props
    const createEventLink = props => <Link to={{pathname: `/events/create-event`}} {...props} />


    return (
    <div>
    <MyContext.Consumer>
    
      {context => (
            
        <div>
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
          </div>

          <div className= {classes.root} >
          

          <GridList cellHeight={300} className={classes.gridList} cols={3}>
            <GridListTile key='Subheader' cols={3} style={{ height: 'auto' }}>
            </GridListTile>
            {this.state.myEventsData.map(event => (
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
          </div>

        </div>
      )}

    </MyContext.Consumer>
    <Tooltip title="Create new event">
        <Button component={createEventLink} variant="fab" className={classes.absolute} color={'primary'}>
        {<AddIcon />}
        </Button>
    </Tooltip>
    <FooterComponent />

  </div>
    )
}}

MyEvents.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyEvents);
