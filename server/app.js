'use strict';

var config = require('./config/config');
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var fileServer = require('serve-static');

// express setup
app.set('port', config.port);
//app.use(bodyParser.urlencoded({extended: true}));
//app.use(bodyParser.json());
app.use(fileServer(config.fileDirectory)); // static file content (images, icons etc.)
app.use('/', express.static(config.appDirectory));

// route enables HTML5Mode by forwarding missing files to the index.html
// serve spa (index.html, *.js)

app.all('/*', function (req, res) {
  res.sendFile(config.appDirectory + '/index.html');
});

// start express http server
app.listen(app.get('port'), function () {
  console.log([
      'Express server port ' + app.get('port'),
      'config.appDirectory = ' + config.appDirectory,
      'config.fileDirectory = ' + config.fileDirectory
    ].join('\n')
  );
});
