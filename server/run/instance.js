/*
 * Server's main instance. This file contains routes handlers 
 * for major data types for BerylDB.
 *
 * For a detailed list of BerylDB's commands, check https://docs.beryl.dev/commands/
 */

require('dotenv').config();

var express       = require('express');
var cookieparser  = require('cookie-parser');
var bodyparser    = require('body-parser');

var tests         = express.Router();
var app           = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(cookieparser());

var Keys             =   require('../routes/keys');
var Lists            =   require('../routes/lists');
var Vectors          =   require('../routes/vectors');
var Admin            =   require('../routes/admin');
var Managers	     =   require('../routes/managers');
var Maps             =   require('../routes/maps');
var Expires	     =   require('../routes/expires');
var Databases 	     =   require('../routes/databases');

tests.use('/maps', Maps);
tests.use('/vectors', Vectors);
tests.use('/keys', Keys);
tests.use('/lists', Lists);
tests.use('/admin', Admin);
tests.use('/managers', Managers);
tests.use('/expires', Expires);
tests.use('/databases', Databases);

app.use('/tests', tests);

/* 

 * The following app usage is invoked as 
 * a route is not found. 
 */

app.use(function(req, res, next) 
{
      var err = new Error('Not Found.');
      err.status = 404;
      next(err);
});

/* 
 * The following app usage is invoked as 
 * a route is invalid, for instance, when
 * a json is poorly formatted. 
 */

app.use(function(err, req, res, next) 
{
      res.status(err.status || 500);
      res.send({ status: -1 });
});

module.exports = app;

