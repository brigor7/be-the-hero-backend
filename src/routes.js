const express = require('express');
const ongController = require('./controller/ongController');
const incidentController = require('./controller/incidentController');
const profileController = require('./controller/profileController');
const sessionController = require('./controller/sessionController');

const routes = express.Router();
routes.use(express.json());

routes.get('/ongs', ongController.index);
routes.post('/ongs', ongController.create);
routes.delete('/ongs/:id', ongController.delete);

routes.get('/profile', profileController.get);

routes.get('/incidents', incidentController.index);
routes.post('/incidents', incidentController.create);
routes.delete('/incidents/:id', incidentController.delete);

routes.post('/session', sessionController.create);
routes.delete('/session', sessionController.delete);

module.exports = routes;
