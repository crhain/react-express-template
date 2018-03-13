const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const debug = require('debug')('react-express:app');

const keys = require('./config/keys');

//require route handlers
const index = require('./routes/index');
const users = require('./routes/users');

//////////////////////////////////////////////////////////////
// ESTABLISH DB CONNECTION                                  //
//////////////////////////////////////////////////////////////
//uncomment to use database
mongoose.connect(keys.mongoURI);

//////////////////////////////////////////////////////////////
// CREATE EXPRESS APP                                       //
//////////////////////////////////////////////////////////////
const app = express();

//////////////////////////////////////////////////////////////
// SETUP MIDDLEWARE                                         //
//////////////////////////////////////////////////////////////
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

//////////////////////////////////////////////////////////////
// SETUP PASSPORT                                           //
//////////////////////////////////////////////////////////////
// uncomment to following lines to use passport
app.use(passport.initialize());
app.use(passport.session());
require('./auth/passport');

//////////////////////////////////////////////////////////////
// SETUP ROUTE HANDLERS                                     //
//////////////////////////////////////////////////////////////
app.use('/', index);
app.use('/users', users);

//////////////////////////////////////////////////////////////
// SETUP 404 ERROR HANDLER                                  //
//////////////////////////////////////////////////////////////
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // send error error object to caller
  res.status(err.status || 500);
  res.send({"error": "resource not found"});
});


//////////////////////////////////////////////////////////////
// SERVE CLIENT ASSETS IN PRODUCTION                        //
//////////////////////////////////////////////////////////////
if(process.env.NODE_ENV === 'production'){
    
    app.use(express.static('client/build'));
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

//////////////////////////////////////////////////////////////
// EXPORT APP FOR USE IN BIN/WWW                            //
//////////////////////////////////////////////////////////////
module.exports = app;