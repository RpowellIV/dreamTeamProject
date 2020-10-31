const express = require('express')
const passport = require('../config/passport')

const router = express.Router()

const ejs = require('ejs');


function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/auth/google')
}

// Homepage
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    // res.send(`<h1>Hello world from server</h1>
    // <a href="./auth/logout">Logout</a>
    // <h2>Req.session</h2>
    // <pre>${JSON.stringify(req.session, null, '\t')}</pre>
    // <h2>Req.user</h2>
    // <pre>${JSON.stringify(req.user, null, '\t')}</pre>`)
    res.render('pages/index');

})


module.exports = router