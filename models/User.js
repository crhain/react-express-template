const mongoose = require('mongoose');
//use object destructuring to assign Schema object to Schema variable
const { Schema } = mongoose;

const userSchema = new Schema({
    userName: String,
    googleId: String,    
});

//initialize user model
module.exports = mongoose.model("users", userSchema);