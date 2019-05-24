const express = require('express');
const app = express();
const path = require('path');
const ngrok = require('ngrok');
const bodyParser = require("body-parser");
const fs = require('fs')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))

const user = "user";
const password = "password";

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"/views/index.html"));
});

app.post('/', (req, res) => {
    sensor_path = path.join(__dirname, "/data/temperature_humidity_sensor.json")
    if(JSON.stringify(req.body) === '{"Temperature":"Humidity"}'){
        res.send(JSON.parse(fs.readFileSync(sensor_path)))
    }else{
        fs.writeFileSync(sensor_path, JSON.stringify(req.body))
        res.send("OK")
    }
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