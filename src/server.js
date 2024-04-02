

'use strict';

const express = require('express');
const cors = require('cors');
const notFound = require('./error-handlers/404.js');
const serverError = require('./error-handlers/500.js');
const validateName = require('./middleware/validator.js');
const logger = require('./middleware/logger.js');

const app = express();
app.use(cors());

app.use(logger);

app.get('/person', validateName, (req, res, next) => {
  res.send({'name': req.query.name});
});

app.use(serverError);
app.use(notFound);

module.exports = app;