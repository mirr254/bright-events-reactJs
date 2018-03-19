// set development to testing to allow hot reloading
process.env.NODE_ENV = 'test';

// register babel to transpile es6 to es5
require('babel-register');

// disable webpack specific features since mocha doesn't know what to do with them
require.extensions['.css'] = function () { return null;};
require.extensions['.jpg'] = function () { return null; };
require.extensions['.png'] = function () { return null; };

//set up jsdom for virtual inmemory dom
var jsdom = require('jsdom').jsdom;
// set up global variables that help simulate browser enviroment
var exposedProperties = ['window','document','navigator'];

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach( (property) =>{
    if (typeof global[property] === 'undefined'){
        exposedProperties.push(property);
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};

