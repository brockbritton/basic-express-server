

'use strict';

const express = require('express');
const cors = require('cors');
const notFound = require('./error-handlers/404.js');
const serverError = require('./error-handlers/500.js');
const logger = require('./middleware/logger.js');
const peopleRouter = require('./routes/people.js');
const petsRouter = require('./routes/pets.js');

const app = express();
app.use(cors());
app.use(express.json()); 
app.use(logger);

app.use('/api/people', peopleRouter);
app.use('/api/pets', petsRouter);

app.use(serverError);
app.use(notFound);

module.exports = {
  start: (port) => app.listen(port, () => {
    console.log(`API SERVER RUNNING ON PORT :: ${port}`);
  }),
  app,
};