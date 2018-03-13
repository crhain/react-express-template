const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET users listing. */
router.get('/', (req, res, next) => {
  res.send('This the auth route!');
});

router.get(
    '/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email']
    })
);

router.get(
    '/google/callback', 
    passport.authenticate('google'), 
    (req, res) => {
        res.redirect('/');
    }
);

router.get('/logout', (req, res) => {
    req.logout();       
    res.redirect('/');
});

//test route to show current user on req
router.get('/current_user', (req, res) => {
    res.send(req.user);
});


module.exports = router;