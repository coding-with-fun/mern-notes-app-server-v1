/**
 * @author Coderc
 * @description Authentication router.
 */

const express = require('express');
const { check } = require('express-validator');

const { signup } = require('../controllers/auth');

const router = express.Router();

router.post(
    '/signup',
    check('userName')
        .isLength({ min: 5 })
        .withMessage('Username must be at least 5 characters long.'),
    check('password')
        .isLength({ min: 5 })
        .withMessage('Password must be at least 5 characters long.'),
    signup
);

module.exports = router;
