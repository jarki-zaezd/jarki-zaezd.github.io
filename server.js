const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

let app = express();
const port = 9000;

app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/'));



app.get('/main', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});



app.listen(port);
console.log('Node listening on port %s', port);