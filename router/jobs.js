const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

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
    
    const {addJob} = req.body;

    console.log(req.body)
    console.log(addJob)

    
    const userJobs = await db2.create(

            {
                hasBoth: "yes",
                JobId: parseInt(addJob),
                UserId: req.user.id
            },{}
        )
        res.json({
            is: "working", 
            userJobs
        })
    } 
);

module.exports = {router};