//add to a route handler to test to see if no user is logged in
exports.requireLogin = (req, res, next) => {
    if(!req.user){
        return res.status(401).send({error: 'You must login!'});
    }

    next();
};

//add to a route handler to test to see if no user is logged in
exports.requireLoggedout = (req, res, next) => {
    if(req.user){
        return res.status(401).send({error: 'You are already logged in!'});
    }

    next();
};