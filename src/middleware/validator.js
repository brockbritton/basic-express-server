'use strict';

function validateName(req, res, next) {
  if (!req.query.name) {
    // passes an error to our error handler
    next('No name provided.');
  } else {
    // passes the request object down to the next middleware
    next();
  }
}

function validateId(req, res, next) {
  if (!req.params.id) {
    next('No id provided.');
  } else {
    next();
  }
}

function validateBody(req, res, next) {
  if (!req.body) {
    next('No body attached to request.');
  } else {
    next();
  }
}
  
module.exports = {
  validateName,
  validateId,
  validateBody,
};