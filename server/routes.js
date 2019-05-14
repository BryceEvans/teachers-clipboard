const express = require('express')
const router = express.Router()

const personService = require('./person.service')

  router.get('/people', (req, res) => {
    personService.getPeople(req, res);
  });
  
  router.post('/person', (req, res) => {
    personService.postPerson(req, res);
  });
  
  router.put('/person/:id', (req, res) => {
    personService.putPerson(req, res);
  });
  
  router.delete('/person/:id', (req, res) => {
    personService.deletePerson(req, res);
  });

  
module.exports = router