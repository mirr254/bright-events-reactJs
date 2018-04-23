import Routes from "./Routes";
import React, { Component, Fragment } from "react";
import CustomHeader from "./components/HeaderComponent";
import Footer from './components/FooterComponent';
import AllEvents from './pages/AllEventsPage';

class App extends Component {
    render() {
       return <Fragment>
            <CustomHeader/>

            <AllEvents />

           <Footer />

           {/* <Routes /> */}

             </Fragment>      
    }
}

export default App;