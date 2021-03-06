const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String },
    email: {
        type: String,
        required: true
    },
    password: { 
        type: String,
        require: true
    }
});

module.exports = mongoose.model('User', userSchema);