const express = require('express');
const passport = require('../config/passport');
const dash = express();

const ejs = require('ejs');
const db = require('../models');

    dash.get("/",async (req, res) => {
        const {isEmployer, bio} = req.body;

        // const editUser = await db.User.insert({
        // isEmployer,
        // bio
        // })

    
        // res.json({
        //     api: "Dashboard",
        //     id: editUser.id,
        //     isEmployer,
        //     bio
        // });
    });

    // dash.get("/books", async (req, res) => {
    //     const books = await db.User.findAll({
    //         attributes: ['title', 'author'],
    //        })
    //     console.log("Get test");
        
    //     res.json({
    //     is: "working" , 
    //     books
    // //     })
    // });

    module.exports = dash;