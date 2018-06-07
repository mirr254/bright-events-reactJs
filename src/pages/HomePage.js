import React, { } from "react";
import CustomHeader from "../components/HeaderComponent";
import Footer from '../components/FooterComponent';
import AllEvents from './AllEventsPage';
import {PropTypes } from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { width } from "window-size";
import { MyContext } from '../App'

const styles = theme =>({
    root: {
        width: '85%',
        margin: 'auto',
    }
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