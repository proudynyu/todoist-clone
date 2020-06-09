const route = require('express').Router();

const projectController = require('../controllers/projectController');

route.get('/', (req, res) => {
    return res.send('Hello world!');
});

route.get('/projects', projectController.indexAll);
route.get('/projects/:id', projectController.indexSpecific);

module.exports = route;