import React, { Component, Fragment } from "react";
import CustomHeader from "../components/HeaderComponent";
import Footer from '../components/FooterComponent';
import AllEvents from './AllEventsPage';

class Home extends Component {
    render() {
        return <Fragment>
            
            <CustomHeader />

            <AllEvents />

            <Footer />

        </Fragment>    
    }
}

export default Home;