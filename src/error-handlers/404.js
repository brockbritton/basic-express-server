
function notFound(req, res, next) {
  res.status(404).send('Invalid Route. Page not Found.');
}
  
module.exports = notFound;