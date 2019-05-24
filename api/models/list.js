const mongoose = require('mongoose');

const listSchema = mongoose.Schema({
    _id: mongoose.Schema.ObjectId,
    title: { type: String },
    elements: [{ type: String }]
});

module.exports = mongoose.model('List', listSchema);