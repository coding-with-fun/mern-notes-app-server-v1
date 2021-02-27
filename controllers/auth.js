/**
 * @author Coderc
 * @description Authentication controller.
 */

const User = require('../models/user');
const { validationResult } = require('express-validator');

exports.signup = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                error: errors.array()[0].msg,
            });
        }

        const user = new User(req.body);
        await user.save();
        return res.status(200).json({
            success: user,
        });
    } catch (e) {
        res.send(e);
    }
};
