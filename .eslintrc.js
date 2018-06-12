module.exports = {
    "extends": "airbnb",
    "root": true,
    "extends":[
       // "airbnb-base",
        "prettier",
        "prettier/react"
    ],
    "parser": "babel-eslint",
    "env": {
        "node": true,
        "es6": true,
        "mocha": true
    },
    "plugins": [
        "prettier"
    ],
   
    "parserOptions": {
        "sourceType": "module",
    },
    "prettier/prettier": [
        "error",
        {
            "trailingComma":"es5",
            "singleQuote" : true,
            "printWidth" : 120
        }
    ]
};