require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const fetch = require('node-fetch');
const pgp = require("pg-promise")();
const Sequelize = require('sequelize');