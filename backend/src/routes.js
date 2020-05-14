const express = require('express');

const OngControler = require('./controllers/OngController')
const IncidentControler = require('./controllers/IncidentController')
const ProfileControler = require('./controllers/ProfileController')
const SessionControler = require('./controllers/SessionControler')

const routes = express.Router();

routes.get('/ongs',OngControler.index);
routes.post('/ongs', OngControler.create);

routes.post('/incidents',IncidentControler.create);
routes.get('/incidents',IncidentControler.index);
routes.delete('/incidents/:id', IncidentControler.delete);

routes.get('/profile', ProfileControler.index);

routes.post('/session',SessionControler.create);
module.exports = routes;