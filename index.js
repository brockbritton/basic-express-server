
require('dotenv').config();

const app = require('./src/server.js');
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`SERVER RUNNING at http://localhost:${PORT} !`);
});