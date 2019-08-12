// get dependencies
const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const routes = require('../Server/routes/index.routes');
// parse requests
const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//Enable CORS for all HTTP methods
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
app.use('/',routes);
  // app.use(fileUpload());
  // app.use(app.router);
  // routes.initialize(app);
  // app.use('/',routes);

  // require('../app/user/user.routes')(app);
  module.exports = app;