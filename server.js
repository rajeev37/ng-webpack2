var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/webpack');


var PORT = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json());
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'bundle')));


require('./server/routes')(app);

app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'bundle/index.html'));
});



app.listen(PORT, function() {
  console.log('Server running on ' + PORT);
})
