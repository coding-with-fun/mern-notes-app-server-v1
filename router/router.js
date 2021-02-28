/**
 * @author Coderc
 * @description Index router.
 */

const express = require('express');

const authRoutes = require('./auth');
const userRoutes = require('./user');

const app = express();

app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes);

module.exports = app;
