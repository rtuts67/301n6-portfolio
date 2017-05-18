var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.get('/', function(req, res) {
  res.sendFile('index.html', {root: '.'});
})

app.use(express.static('.'));

app.get('*', function(req, res) {
  res.send('404! Routes not working.');
})

app.listen(port, () => console.log('Listening on port' + port));
