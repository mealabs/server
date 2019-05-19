const express = require('express');
const app = express();
const path = require('path');
const ngrok = require('ngrok');
const user = "user"
const password = "password"

app.get('/', (req, res) => {
    res.send("Data: 1");
});

const server = app.listen(80, () => {
    console.log('Express listening at ', server.address().port);
})

ngrok.connect({
    proto : 'http',
    addr : 80,
    auth : `${user}:${password}`
}, (err, url) => {
    console.log('Tunnel Created -> ', url);
    console.log('Tunnel Inspector ->  http://127.0.0.1:4040');
});