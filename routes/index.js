const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send('Hello, Daph!!!');
});

module.exports = routes;