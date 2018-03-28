/*global System */
'use strict';

System.config({
    transpiler: "babel",
    packages: {
         './': { defaultExtension: false },
        // './_actions': { main: 'index.js' },
        // './_components': { main: 'index.js', defaultExtension: false },
        // './_constants': { main: 'index.js' },
        // './_helpers': { main: 'index.js' },
        // './_reducers': { main: 'index.js' },
        // './_services': { main: 'index.js' },
        // './App': { main: 'index.js', defaultExtension: false },
        // './HomePage': { main: 'index.js', defaultExtension: false },
        // './LoginPage': { main: 'index.js', defaultExtension: false },
        // './RegisterPage': { main: 'index.js', defaultExtension: false }
    },
    map: {
        'npm:react@16.0eta.5': 'npm:react@16.2.0',
        'react-redux': 'npm:react-redux@5.0.7'
    },
    paths: {
        "*": "https://npm.jspm.io/*.js"
    }
});
