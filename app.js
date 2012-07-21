
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes');

var app = module.exports = express.createServer();

var db = [];

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res) {
  res.render('beta.jade', {
    title: 'Beta Page, nothing here yet',
    vow: '',
    db: db
  });
});

app.post('/', function(req, res) {
  db.push(req.body.vow);
  res.render('beta.jade', {
    title: 'Beta Page, nothing here yet',
    db: db
  });
});

app.post('/ajax', function(req, res) {
  db.push(req.body.vow);
  console.log('ARRAY:' + JSON.stringify(db));
  res.send({db: db});
});

app.get('/ajax', function(req, res) {
  res.send({db: db});
});

app.listen(3000);