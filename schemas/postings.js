const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    postId: {
        type: Number,
        required: true,   
        unique: true,    
    },    
    username: {
        type: String,
        required: true,         
    },
    passwords: {
        type: String,
        required: true,        
    },
    title: {
        type: String,
        required: true,
    },
    content:{
        type: String,
        required: true,
    },
    time: {
        type: Date,
        required: true,
    },

});

module.exports = mongoose.model("Postings",postSchema);

