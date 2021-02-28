/**
 * @author Coderc
 * @description ToDo router.
 */

const express = require('express');

const { addToDo } = require('../controllers/todo');
const { authenticateToken } = require('../middlewares/auth');
const { validateToDo } = require('../middlewares/checkReq');

const router = express.Router();

/**
 * @type        POST
 * @route       /api/todo/add
 * @description Add New ToDo controller.
 * @access      Private
 */
router.post('/add', authenticateToken(), validateToDo, addToDo);

module.exports = router;
