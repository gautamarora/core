var core = require('../index');

module.exports.init = function (app, express) {
  console.log('core self init');
  core.registerRoutes(__dirname, 'routes', app, express);
  core.registerPartials(__dirname, 'partials', 'core');
};