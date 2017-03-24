var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var PORT = process.env.PORT || 3000;

var app = express();
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'bundle')));

app.all('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'bundle/index.html'));
});

app.listen(PORT, function() {
  console.log('Server running on ' + PORT);
})
