import Routes from "./Routes";
import React, { Component } from "react";
import "./assets/App.css";

class App extends Component {
    render() {
        return (
            <div className="App container">  
                <Routes />
            </div>
        );
    }
}

export default App;