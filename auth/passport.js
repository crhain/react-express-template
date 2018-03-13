const mongoose = require('mongoose');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const User = require('../models/User');
const debug = require('debug')('react-express:passport');

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

//////////////////////////////////////////////////////////////
// GOOGLE OAUTH2 STRATEGY                                   //
//////////////////////////////////////////////////////////////
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/users/auth/google/callback',
        proxy: true
    }, 
    async (accessToken, refreshToken, profile, done) => {       
        const existingUser = await User.findOneAndUpdate(
            { googleId: profile.id },
            { lastLoggedDate: Date.now()},
            { new: true }
        ).catch(err => {
            debug(err);
            return done(err);
        });
        if(existingUser){                
            return done(null, existingUser);
        }  
        // console.log(profile);      
        const newUser = await new User({ 
            googleId: profile.id, 
            userName: profile.displayName,
            displayName: profile.displayName,             
        }).save()
        .catch(err => {
            debug(err);
            return done(err);
        });

        return done(null, newUser);            
        
    })
);

