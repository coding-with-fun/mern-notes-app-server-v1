const jwt = require('express-jwt');

exports.authToken = () => {
    return [
        jwt({
            secret: process.env.SECRET,
            algorithms: ['HS256'],
            userProperty: 'auth',
        }),
        (err, req, res, next) => {
            res.status(err.status).json(err.inner.message);
        },
    ];
};
