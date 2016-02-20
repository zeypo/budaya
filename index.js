var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.get('/histokid', function(request, response) {
  response.render('pages/histokid');
});

app.get('/equipe', function(request, response) {
  response.render('pages/our-team');
});

app.get('/presse', function(request, response) {
  response.render('pages/press');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
