/**
 * @author Coderc
 * @description Index router.
 */

const express = require('express');

const authRoutes = require('./auth');
const userRoutes = require('./user');

const app = express();
const BASE_URL = '/api';

app.use(BASE_URL + '/auth', authRoutes);
app.use(BASE_URL + '/user', userRoutes);

module.exports = app;
