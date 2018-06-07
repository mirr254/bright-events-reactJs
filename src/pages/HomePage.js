import React, { } from "react";
import CustomHeader from "../components/HeaderComponent";
import Footer from '../components/FooterComponent';
import AllEvents from './AllEventsPage';
import {PropTypes } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { width } from "window-size";
import { MyContext } from '../App'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme =>({
    root: {
        width: '85%',
        margin: 'auto',
        position: 'relative',
        
    },
    fab: {
        position: 'absolute',
        bottom: theme.spacing.unit * 8,
        right: theme.spacing.unit * -8,
      },
});

function Home(props) {

    const {classes} = props;
   
        return(
         <div>
             <MyContext.Consumer>
                 {
                     context => (
                         <div>

                            <div className= {classes.root}>
                            

                            <AllEvents events={context.events} />
                            <Tooltip title="Create New Event">
                                <Button variant="fab" className={classes.fab} color={'primary'}>
                                {<AddIcon />}
                                </Button>
                            </Tooltip>

                            <Footer />
                            </div>
                         </div>
                     )
                 }

            </MyContext.Consumer>


        </div>    
        );
}

export default withStyles(styles)( Home);