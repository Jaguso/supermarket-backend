const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.user_register = (req, res, next) => {

    User.find({ email: req.body.email })
        .exec()
        .then(user => {
            if (user.length >= 1) {
                return res.status(409).json({
                    message: 'Email already exists'
                });
            } else {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    if (err) {
                        return res.status(500).json({
                            error: err
                        });
                    } else {
                        const user = new User({
                            _id: new mongoose.Types.ObjectId(),
                            username: req.body.username,
                            email: req.body.email,
                            password: hash
                        });  
                        user.save()
                            .then(result => {
                                console.log(result);
                                const token = jwt.sign({
                                    username: user.username,
                                    email: user.email,
                                    userId: user._id
                                    }, 
                                    process.env.JWT_KEY,
                                    { expiresIn: "24h" }
                                );
                                res.status(201).json({
                                    message: 'User cratead successfully',
                                    token: token
                                })
                            })
                            .catch(err => {
                                console.log(err);
                                res.status(500).json({
                                    error: err
                                });
                            }); 
                    }
                })
            }
        })
    
    
    
}