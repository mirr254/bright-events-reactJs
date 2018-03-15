import Routes from "./Routes";
import React, { Component } from "react";
import CustomNavbar from './components/NavbarComponent';
import "./assets/App.css";

class App extends Component {
    render() {
        return (
            <div className="App container">
                {/* <CustomNavbar /> */}
                <Routes />
            </div>
        );
    }
}

export default App;