const mongoose = require("mongoose");



const postSchema = new mongoose.Schema({
    authorId: {
        type: Number,
        required: true,
        unique: true,
    },    
    name: {
        type: String,
        required: true,
        unique: true,
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

