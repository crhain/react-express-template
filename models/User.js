const mongoose = require('mongoose');
//use object destructuring to assign Schema object to Schema variable
const { Schema } = mongoose;

const userSchema = new Schema({
    userName: {type: String, required: true},
    displayName: {type: String, required: true},
    emails: {type: [String]},
    createdDate: {type: Date, default: Date.now()},
    lastLoggedDate: {type: Date, default: Date.now()},
    googleId: String,    
});

//initialize user model
module.exports = mongoose.model("users", userSchema);