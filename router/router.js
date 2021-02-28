/**
 * @author Coderc
 * @description Index router.
 */

const express = require('express');

const authRoutes = require('./auth');

const app = express();

app.use('/api/auth', authRoutes);

module.exports = app;
