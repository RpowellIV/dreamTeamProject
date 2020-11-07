require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('./config/passport');
const fetch = require('node-fetch');
const pgp = require('pg-promise')();
const Sequelize = require('sequelize');
const ejs = require('ejs');
const authRouter = require('./router/auth')
const mainRouter = require('./router/main')
const landingPage = require('./router/landingPage')
const { User } = require('./models');
// require('./auth/passport-setup');

const {
  DB_LOCAL,
  DB_PASSWORD,
  DB_NAME,
  DB_USER,
  PORT,
} = require("./envConfig");

const app = express();

const heartbeat = require("./router/heartBeat");
const test = require("./router/apiTest");
const { router: jobsRouter } = require("./router/jobs")

app.use(bodyParser.json());

// setup sessions with cookies
app.use(
  session({
    secret: "super secret",
    cookie: { maxAge: 60000 },
  })
);

// attach passport to express and sessions
app.use(passport.initialize());
app.use(passport.session());

// Attach routes

app.use('/auth', authRouter);
app.use('/', mainRouter);
app.use('/landingPage', landingPage);

app.use('/', express.static(__dirname + '/public'));
app.use('/js', express.static(__dirname + '/js'));

// Below is setting the view to look for an ejs file
app.set("view engine", "ejs");



app.use("/heartbeat", heartbeat);
app.use("/test", test);
app.use("/jobs", jobsRouter);

app.listen(PORT, () => {
  console.log(`The server at port ${PORT} is listening...`);
});
