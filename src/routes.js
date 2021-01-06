const express = require('express');
const ongController = require('./controller/ongController.js');

const routes = express.Router();
routes.use(express.json());

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);
routes.delete('/ongs/:id', ongController.delete);

module.exports = routes;