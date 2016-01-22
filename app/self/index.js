var core = require('../index');

module.exports.init = function (app, express) {
  core.registerRoutes(__dirname, 'routes', app, express);
  core.registerPartials(__dirname, 'partials', 'core');
};