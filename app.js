const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoutes = require('./api/routes/user');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

mongoose.connect(
    process.env.MONGODB_URI,
    { useNewUrlParser: true }
)

app.get('/', (req, res) => {
    res.send("it woorks")
});

app.use('/users', userRoutes);

module.exports = app;