/** App.js
*		
* 	API Entry
*
*	Author: Weston E. Jones
*/

var express = require('express');
var bodyParser = require('body-parser');
// var cookieParser = require('cookie-parser');

var app = express();
var db = require('./db');

var api = require('./routes.js');

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());


app.use("/", api);

module.exports = app;

