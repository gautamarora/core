module.exports.initBrowserifyOptions = {
  debug: true,
  insertGlobals: false
};

module.exports.initBrowserify = function(browserify, options) {
  return browserify(options)
    .require(require.resolve('jquery'), {expose: 'jquery'})
    .require(require.resolve('lodash'), {expose: 'lodash'})
    .require(require.resolve('backbone'), {expose: 'backbone'})
    .require(require.resolve('bootstrap-sass'), {expose: 'bootstrap'});
};