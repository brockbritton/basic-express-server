
// middleware for checking toppings per request
function validateName(req, res, next) {
  if (!req.query.name) {
    // passes an error to our error handler
    next('No name provided.');
  } else {
    // passes the request object down to the next middleware
    next();
  }
}
  
module.exports = validateName;