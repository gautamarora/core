var CORE = '_core_';
var singleton = require('1t');

// #ifndef
singleton(CORE, module, function () {
// #define

var once = require('once');
var self = require('./self');

//TODO - this should be in ../app/utils/____
exports.registerRoutes = require('../utils/register-routes');
exports.registerPartials = require('../utils/register-partials');
exports.renderTemplate = require('../utils/render-template');

//TODO - this should be in ../client/utils/____
exports.initBrowserify = require('../utils/init-browserify').initBrowserify;
exports.initBrowserifyOptions = require('../utils/init-browserify').initBrowserifyOptions;

//TODO - this should be in ../app/utils/____
exports.initSass = require('../utils/init-sass.js').initSass;

exports.init = once(function(app, express) {
  self.init(app, express);
});

module.exports.processData = function(microapp, req, res, cb) {
  res.data.core = {};
  cb(null, 'core', req, res);
};

});
// #endif