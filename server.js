const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

app.use(express.static('./'));

function callBack(req, res) {
  res.sendFile('index.html', {root: './'});
}

app.get('*', callBack)

// app.get('*', function(req, res) {
//   res.send('404! Routes not working.');
// })

app.listen(PORT, () => console.log('Listening on port' + PORT));
