var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

app.use(express.static('./'));
app.get('*', function(req, res) {
  res.sendFile('index.html', {root: '.'});
})
app.listen(port, () => console.log('Listening on port' + port));
