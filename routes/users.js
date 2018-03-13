const express = require('express');
const router = express.Router();
const passport = require('passport');
const {requireLogin, requireLoggedout} = require('../auth');

/* GET users listing. */
router.get('/', requireLogin, (req, res, next) => {
  res.send('This the users route!');
});

router.get(
    '/auth/google',
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

router.get(
    '/auth/google/callback', 
    passport.authenticate('google'), 
    (req, res) => {
        res.redirect('/');
    }
);


router.get('/current/logout', requireLogin, (req, res) => {
    req.logout();       
    res.redirect('/');
});

//test route to show current user on req
router.get('/current', (req, res) => {
    res.send(req.user);
});




module.exports = router;