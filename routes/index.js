const routes = require('express').Router();

const myController = require('../controllers')

routes.get('/', myController.awesomeFunction);
routes.get('/Awesome', myController.returnAnotherPerson);

module.exports = routes;