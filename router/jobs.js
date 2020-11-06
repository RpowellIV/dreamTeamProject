const express = require('express');
const router = express.Router();

const db = require('../models').Jobs;

router.get("/", async (req, res) => {
    const jobs = await db.findAll({
        attributes: ['title', 'companyName', 'description', 'email', 'city', 'state', 'location']
    })
    res.json({
        is: "working", 
        jobs
    })
})

module.exports = {router};