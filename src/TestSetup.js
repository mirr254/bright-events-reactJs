// set development to testing to allow hot reloading
process.env.NODE_ENV = 'test';

// register babel to transpile es6 to es5
require('babel-register');

// disable webpack specific features since mocha doesn't know what to do with them
require.extensions['.css'] = function () { return null;};
