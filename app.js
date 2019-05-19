const express = require('express');
const app = express();
const path = require('path');
const ngrok = require('ngrok');
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const user = "user";
const password = "password";

temp_humid = {
    "Temperature": "",
    "Humidity": ""
};

app.get('/', (req, res) => {
    res.send(temp_humid);
});

app.post('/', (req, res) => {
    console.log(req.body);
    temp_humid = req.body
    res.send(temp_humid);
});

const server = app.listen(80, () => {
    console.log('Express listening at ', server.address().port);
});

ngrok.connect({
    proto : 'http',
    addr : 80,
    auth : `${user}:${password}`
}, (err, url) => {
    console.log('Tunnel Created -> ', url);
    console.log('Tunnel Inspector ->  http://127.0.0.1:4040');
});