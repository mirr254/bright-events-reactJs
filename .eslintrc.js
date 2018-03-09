module.exports = {
    "extends": "airbnb-base",
    "root": true,
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
        "react/prop-types": [2],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "max-len": [1, 120, 2, {ignoreComments: true}],
        "linebreak-style": 0,     
    }
};

