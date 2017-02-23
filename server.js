var express = require('express');
var app = express();
var corsProxy = require('cors-anywhere');

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var path = require('path');

app.use(express.static(path.join(__dirname,'./client')));

app.use(express.static(path.join(__dirname,'./bower_components')));


require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);


app.listen(8000, function(){
  console.log("I'm listening on 8000!");
})

//CORS to access API

// Listen on a specific host via the HOST environment variable
var host = process.env.HOST ? '0.0.0.0' : '127.0.0.1';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
