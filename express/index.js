//const cors = require('cors')({origin: true})
const express = require('express');
const compression = require('compression')
const _app_folder = 'dist/'
const _port = 4100;

//app.use(cors())
const app = express();
app.use(compression());

app.get('*.*', express.static('dist/', {maxAge: '2y'}));

app.all('*', function (req, res) {
    res.status(200).sendFile(`/`, {root: _app_folder});
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(_port, function () {
    console.log("Node Express server for " + app.name + " listening on http://localhost:" + _port);
});
