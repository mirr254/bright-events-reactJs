import Routes from "./Routes";
import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {
    render() {
        return (
            <MuiThemeProvider >
                <Routes />
            </MuiThemeProvider>
        );
    }
}

export default App;