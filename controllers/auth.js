/**
 * @author Coderc
 * @description Authentication controller.
 */

const User = require('../models/user');

/**
 * @type        POST
 * @route       /api/auth/signup
 * @description User Signup controller
 * @access      Public
 */
exports.signup = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        return res.status(200).json({
            success: user,
        });
    } catch (e) {
        return res.send(e);
    }
};

/**
 * @type        POST
 * @route       /api/auth/signin
 * @description User Signin controller
 * @access      Public
 */
exports.signin = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        return res.status(200).json({
            success: user,
        });
    } catch (e) {
        return res.send(e);
    }
};
