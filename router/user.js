/**
 * @author Coderc
 * @description User router.
 */

const express = require('express');

const { authToken } = require('../middlewares/auth');

const router = express.Router();

router.get('/', authToken(), (req, res) => {
    return res.json(req.auth);
});

module.exports = router;
