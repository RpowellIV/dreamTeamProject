const express = require('express');
const router = express.Router();

const db = require('../models').Jobs;
const db2 = require('../models').userJobs;

router.get("/", async (req, res) => {
    const jobs = await db.findAll({
        attributes: ['id', 'title', 'companyName', 'description', 'email', 'city', 'state', 'location']
    })
    res.json({
        is: "working", 
        jobs
    })
})

router.post('/', async (req, res) => {

    console.log("Here")
    console.log(req.user.id);
    
    const {addJob} = req.body;

    console.log(req.body)
    // console.log(addJob)

    
    const userJobs = await db2.create(

            {
                hasBoth: "yes",
                JobID: addJob,
                UserID: req.user.id
            },{}
        )
        res.json({
            is: "working", 
            userJobs
        })
    } 
);

module.exports = {router};