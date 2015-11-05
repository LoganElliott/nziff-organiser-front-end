'use strict';

var path = require('path');

// export environment specific settings (IIFE returns config object)
module.exports = (function(){
    switch (process.env.NODE_ENV || 'development'){
        // production
        case 'production':
            // check deployment requirements for port - typically 80 or 8080
            return {
                port: process.env.PORT || 80,
                appDirectory: path.join(path.dirname(__dirname), 'public'),
                fileDirectory: path.join(path.dirname(__dirname), 'public')
            };

        // development
        default:
            // set this to match the port/proxy you are using with dev
            return {
                port: 3000,
                appDirectory: path.join(path.dirname(__dirname), '../src'),
                fileDirectory: path.join(path.dirname(__dirname), '../')
            };
    }
}());
