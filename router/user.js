/**
 * @author Coderc
 * @description User router.
 */

const express = require('express');

const { userDetails } = require('../controllers/user');
const { authenticateToken } = require('../middlewares/auth');

const router = express.Router();

router.get('/', authenticateToken(), userDetails);

module.exports = router;
