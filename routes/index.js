const routes = require('express').Router();

const myController = require('../controlers')

routes.get('/', myController.awesomeFunction);
routes.get('/Awesome', myController.returnAnotherPerson);

module.exports = routes;