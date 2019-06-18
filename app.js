const express = require('express');
const cors = require('cors')
const app = express();
const path = require('path');
const bodyParser = require("body-parser");
const fs = require('fs');
app.use(bodyParsesr.json());
app.use(bodyParsesr.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname,"/views/index.html"));
});

app.post('/', (req, res) => {
    sensor_path = path.join(__dirname, "/data/temperature_humidity_sensor.json")
    if(JSON.stringify(req.body) === '{"Temperature":"Humidity"}'){
        res.send(JSON.parse(fs.readFileSync(sensor_path)));
    }else{
        fs.writeFileSync(sensor_path, JSON.stringify(req.body));
        res.send("OK");
    }
});

const server = app.listen(80, () => {
    console.log('Express listening at ', server.address().port);
});