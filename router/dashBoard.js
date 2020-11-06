const express = require('express');
const passport = require('../config/passport');
const bodyParser = require('body-parser');
const dash = express();

const ejs = require('ejs');
const db = require('../models');

console.log("start")

    dash.post("/", async (req, res) => {

        console.log("Here")
        console.log(req.user.id);

        const {isEmployer, bio} = req.body;

        console.log(isEmployer,bio)

        // const user = await db.Users.findOne({ where: { id: req.user.id }})
        
        const user = await db.Users.update(
            {isEmployer: true},

            { 
                where: {
                     id: req.user.id 
                    }, 
                returning: true
            }
        )
        // const user = await db.Users.update({
        //     isEmployer,
        //     bio
        // },
        // { where: { id: req.user.id },
        //     returning: true,
        //     plain: true
        // })
        .then(function(result){
            console.log(result)
        })
        .catch((e) => console.log(e))

        console.log(user)
        

        if (!user) {
            console.error('error')
        } else {
            res.json({
            api: "Dashboard",
            id: user.id,
            isEmployer,
            bio
        });
        // (isEmployer) ? res.render("pages/employer") : 
      };  // res.render("pages/employee")
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