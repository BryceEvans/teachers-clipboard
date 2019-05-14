const Person = require('./person-model')
const ReadPreference = require('mongodb').ReadPreference;
require('./mongoConnect').connect()

function getPeople(req, res) {
    const docquery = Person.find({}).read(ReadPreference.NEAREST);
    docquery
    .exec()
    .then(people => {
        res.status(200).json(people)
    })
    .catch(error => {
        res.status(500).send(error)
        return
    })
}

function postPerson(req, res) {
    const originalPerson = { id, first_name, last_name} = req.body;
    console.log('originalPerson:', originalPerson)
    const person = new Person(originalPerson);
    person.save(error => {
      if (checkServerError(res, error)) return;
      res.status(201).json(person);
      console.log('Person created successfully!');
    });
  }
  
  function putPerson(req, res) {
    const id = parseInt(req.params.id, 10)
    const originalPerson = { firstName, lastName, nickname, from, work, school, myRelationship, weMet, relationshipDepth, birthdate, siblings, children, familyPosition, phone, email, contact, } = req.body;
    Person.findOne({ id: id}, (error, person) => {
      if (checkServerError(res, error)) return;
      if (!checkFound(res, person)) return;
  
          person.firstName = originalPerson.firstName;
          person.lastName = originalPerson.lastName;
          person.nickname = originalPerson.nickname;
          person.from = originalPerson.from;
          person.work = originalPerson.work;
          person.school = originalPerson.school;
          person.myRelationship = originalPerson.myRelationship;
          person.weMet = originalPerson.weMet;
          person.relationshipDepth = originalPerson.relationshipDepth;
          person.birthdate = originalPerson.birthdate;
          person.siblings = originalPerson.siblings;
          person.children = originalPerson.children;
          person.familyPosition = originalPerson.familyPosition;
          person.phone = originalPerson.phone;
          person.email = originalPerson.email;
          person.contact = originalPerson.contact;
      person.save(error => {
        if (checkServerError(res, error)) return;
        res.status(200).json(person);
        console.log('person updated successfully!');
      });
    });
  }
  
  function deletePerson(req, res) {
    const id = parseInt(req.params.id, 10);
    Person.findOneAndRemove({ id: id })
      .then(person => {
        if (!checkFound(res, person)) return;
        res.status(200).json(person);
        console.log('Person deleted successfully!');
      })
      .catch(error => {
        if (checkServerError(res, error)) return;
      });
  }
  
  function checkServerError(res, error) {
    if (error) {
      res.status(500).send(error);
      return error;
    }
  }
  
  function checkFound(res, person) {
    if (!person) {
      res.status(404).send('person not found.');
      return;
    }
    return person;
  }

module.exports = {
    getPeople,
    postPerson,
    putPerson,
    deletePerson
}