const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send("it woorks")
});

module.exports = app;