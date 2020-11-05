const express = require('express');
const app = express();

const ejs = require('ejs');
const db = require('./models');

app.get("/", async (req, res) => {
    const jobs = await db.Jobs.findAll({
        attributes: ['title', 'companyName', 'description', 'email', 'location']
    })
    res.json({
        is: "working", 
        jobs
    })
})