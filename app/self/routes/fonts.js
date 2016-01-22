var path = require('path');

module.exports = function(app, express) {
  var normalizedPath = path.join(__dirname, '..', '..', '..', 'styles', 'bootstrap', 'fonts');
  app.use('/fonts', express.static(normalizedPath));
};