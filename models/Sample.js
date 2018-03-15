const mongoose = require('mongoose');
const { Schema } = mongoose;

const sampleSchema = new Schema({
    title: {type: String, required: true},
    author: {type: String, required: true},
    text: {type: String, required: true},
    postDate: {type: Date, default: Date.now()}    
});

//initialize user model
module.exports = mongoose.model("sample", sampleSchema);