module.exports = {
    "extends": "airbnb",
    "root": true,
    "extends": ["airbnb-base"],
    "env": {
    "node": true,
    "es6": true,
    "mocha": true
    },
    parser: "babel-eslint",
    "plugins": [
        "react"
    ],
    "rules": {
        "prop-types": [2],        
    }
};