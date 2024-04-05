
'use strict';

// define all routing logic for our RESTful service
const express = require('express');
const { People, Collection } = require('../models');
const { validateId, validateBody } = require('../middleware/validator.js');

const router = express.Router();
const CustomerCollection = new Collection(People);

//use validateBody
router.post('/', validateBody, async(req, res) => {
  let record = await CustomerCollection.create(req.body);
  res.json(record);
});

router.get('/', async (req, res) => {
  let records = await CustomerCollection.read();
  console.log(records);
  res.json(records);
});

//use validateID
router.get('/:id', validateId, async (req, res) => {
  let records = await CustomerCollection.read(req.params.id);
  res.json(records);
});

//use validateID
router.put('/:id', validateId, async (req, res) => {
  let records = await CustomerCollection.update(req.params.id, req.body);
  res.json(records);
  
});

//use validateID
router.delete('/:id', validateId, async (req, res) => {
  let records = await CustomerCollection.delete(req.params.id);
  res.json(records);
  
});

module.exports = router; 