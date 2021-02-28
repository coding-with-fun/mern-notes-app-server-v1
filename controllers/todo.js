/**
 * @author Coderc
 * @description ToDo controller.
 */

require('colors');

const User = require('../models/user');
const ToDo = require('../models/todo');

/**
 * @type        POST
 * @route       /api/todo/add
 * @description Add New ToDo controller.
 * @access      Private
 */
exports.addToDo = async (req, res) => {
    try {
        const userID = req.auth;

        const newToDo = new ToDo({
            title: req.body.title,
        });
        await newToDo.save();

        await User.findByIdAndUpdate(userID, {
            $push: { todoList: newToDo._id },
        });

        return res.status(200).json({
            success: {
                message: 'ToDo added successfully.',
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
