
function logger(req, res, next) {
  //console.log(`METHOD: ${req.method}, PATH: ${req.path}`);
  next();
}
    
module.exports = logger;