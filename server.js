require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const fetch = require('node-fetch');
const pgp = require("pg-promise")();
const Sequelize = require('sequelize');


const { DB_LOCAL, DB_PASSWORD, DB_NAME, DB_USER, PORT } = require("./envConfig");

const app = express();

const heartbeat = require('./router/heartBeat');
const test = require('./router/apiTest');

app.use(bodyParser.json());

app.use("/", express.static(__dirname + "/public"));
app.use("/css",express.static(__dirname + "/css"));
app.use("/js", express.static(__dirname + "/js"));

app.use('/heartbeat', heartbeat);
app.use('/test', test);


  app.listen(PORT, ()=> {
    console.log(`The server at port ${PORT} is listening...`);
})