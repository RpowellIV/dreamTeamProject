const express = require('express');
const passport = require('../auth/passport-setup');
const router = express.Router()

//callback
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

router.get('/google/callback',
    passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
        // Successful authentication, redirect home.
        res.redirect('/');
    });

router.get('/logout', (req, res) => {
    req.logout()
    res.redirect('/')
})

module.exports = router