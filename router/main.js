const express = require('express')
const passport = require('../auth/passport-setup')

const router = express.Router()



function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/auth/google')
}

// Homepage
router.get('/', ensureAuthenticated, (req, res) => {
    res.send(`<h1>Hello world from server</h1>
    <a href="./auth/logout">Logout</a>
    <h2>Req.session</h2>
    <pre>${JSON.stringify(req.session, null, '\t')}</pre>
    <h2>Req.user</h2>
    <pre>${JSON.stringify(req.user, null, '\t')}</pre>`)
})


module.exports = router