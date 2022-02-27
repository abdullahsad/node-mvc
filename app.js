require("dotenv").config();
require("./config/database").connect();
const studentRoute = require('./routes/student.route')
const authRoute = require('./routes/auth.route')
const express = require("express");
let bodyParser = require('body-parser');
let cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(cors());
app.use('/students', studentRoute)
app.use('/user', authRoute)

// Logic goes here

module.exports = app;