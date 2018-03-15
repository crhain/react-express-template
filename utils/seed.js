const Sample = require('../models/Sample');

const SAMPLE = [
    {title: "Sample Post 1", author: "Carl", text: "This is a sample post."},
    {title: "Sample Post 2", author: "Mary", text: "Ipsum lorem and all that stuff. Have a great day!"},
    {title: "Sample Post 1", author: "Carl", text: "Not so ipsum lorem over here, but at least the sun is shinning."},
    {title: "Sample Post 1", author: "Bob", text: "I have some good news... and some bad news."},
];


module.exports = async () => {
    await Sample.remove({});
        
        

    SAMPLE.forEach( async seed => {
        await Sample.create(seed);            
    });    
}