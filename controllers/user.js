/**
 * @author Coderc
 * @description User controller.
 */

require('colors');

const User = require('../models/user');

/**
 * @type        GET
 * @route       /api/user
 * @description Fetch User's Details controller
 * @access      Private
 */
exports.userDetails = async (req, res) => {
    try {
        const userID = req.auth;

        const user = await User.findOne({
            _id: userID,
        });

        if (!user) {
            return res.status(404).json({
                error: {
                    message: 'User not found.',
                },
            });
        }

        return res.json({
            message: 'User details fetched successfully.',
            user: {
                id: user._id,
                name: user.name,
                userName: user.userName,
            },
        });
    } catch (error) {
        console.log(`${error.message}`.red);
        return res.status(500).json({
            error: {
                message: 'Internal server error.',
            },
        });
    }
};
