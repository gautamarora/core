var path = require('path');

module.exports = function(app, express) {
  //note: if linking bootstrap from node_modules, remove the last 'bootstrap' from the path
  var normalizedPath = path.join(__dirname, '..', '..', '..', 'node_modules', 'bootstrap-sass', 'assets', 'fonts', 'bootstrap');
  app.use('/fonts', express.static(normalizedPath));
};