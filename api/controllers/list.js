const mongoose = require('mongoose');
const List = require('../models/list');

exports.list_create = (req, res, next) => {
    const list = new List({
        _id: new mongoose.Types.ObjectId(),
        title: req.body.title,
        elements: req.body.elements
    });
    list.save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                listId: result._id,
                message: 'list created successfully'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
}