const mongoose = require("mongoose");



const userSchema = new mongoose.Schema({
    userId: {
        type: Number,
        required: true,
        unique: true,
    },
    passwords: {
        type: String,
        required: true,
        
    },
    name: {
        type: String,
        required: true,
        unique: true,
    },
});

module.exports = mongoose.model("Users",userSchema);

