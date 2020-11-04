const express = require('express')
const passport = require('../config/passport')

const router = express.Router()

const ejs = require('ejs');


function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/')
}

router.get("/", (req, res) => {
    res.render("pages/index");
});

// Homepage
router.get("/landingPage", ensureAuthenticated, (req, res) => {
    // res.send(`<h1>Hello world from server</h1>
    // <a href="./auth/logout">Logout</a>
    // <h2>Req.session</h2>
    // <pre>${JSON.stringify(req.session, null, '\t')}</pre>
    // <h2>Req.user</h2>
    // <pre>${JSON.stringify(req.user, null, '\t')}</pre>`)
    // res.send(`<h1>TEST</h1>`);
    // res.render('/dashbord');
    res.render("pages/landingPage");
})

// Renders the dashboard for the employer
router.get("/employer", ensureAuthenticated, (req, res) => {
    res.render("pages/employer");
});

// Renders the dashboard for the employee
router.get("/employee", ensureAuthenticated, (req, res) => {
    res.render("pages/employee");
});


module.exports = router