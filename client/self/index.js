var CORE = '_core_';
var singleton = require('1t');

// #ifdef
singleton(CORE, module, function () {
// #define

var once = require('once');

exports.$ = jQuery = require('jquery');
exports._ = require('lodash');
exports.Backbone = require('backbone');
exports.bootstrap = require('bootstrap');

exports.globalBus = require('../../utils/global-bus');

exports.init = once(function() {
  if(!window.microapps.core) return false;
  console.log('core self init');
  var localBus = require('../../utils/local-bus');
});

});