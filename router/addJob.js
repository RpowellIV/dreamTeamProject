// const express = require('express');
// const bodyParser = require('body-parser');
// const pgp = require("pg-promise")();
// const router = express();
// const db = require('../models');
// const jobs = require('./jobs');


// router.use(bodyParser.json())
// router.use(bodyParser.urlencoded({ extended: false }));


// function ensureAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();
//     }
//     res.redirect('/')
// }

// // Homepage
// router.get("/",ensureAuthenticated, (req, res) => {
//     res.render("/");
// })

// router.post('/', async (req, res) => {

//     console.log("Here")
//     console.log(req.user.id);
    
//     const {addJob} = req.body;

//     console.log(req.body)
//     // console.log(addJob)

    
//     const userJobs = await db.userJobs.create(

//             {
//                 hasBoth: "yes",
//                 JobID: addJob,
//                 UserID: req.user.id
//             },{}
//         )
//         res.json({
//             is: "working", 
//             jobs
//         })
//     } 
// );


// module.exports = router;