const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
// const jobs = require('../models/jobs');
const db = require('../models').Jobs;
const db2 = require('../models').userJobs;

// router.use('/', express.static(__dirname + '../views/pages'));

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }));


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
    
    const {
        addJob, 
        outJob, 
        jCompany,
        jAbout,
        jUrl,
        jLocation,
        jState,
        jCity,
        jTitle } = req.body;

    console.log(addJob)

    console.log(outJob)

    const Jobs = await db.create(

        {
            title: jTitle,
            companyName: jCompany,
            description: jAbout,
            email: jUrl,
            location: jLocation,
            city: jCity,
            state: jState,
            numApplied: null,
            whoApplied: null
        },{}
    )

    const userJobs = await db2.create(

        {
            hasBoth: "yes",
            JobId: parseInt(addJob) || Jobs.id,
            UserId: req.user.id
        },{}
        )
    
  
});

module.exports = {router};