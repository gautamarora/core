var fs = require('fs');
var path = require('path');
var sassResolve = require('@gautamarora/sass-resolve');

var root;

var opts = {
  debug           : true,
  inlineSourceMap : true,
};

//registers the root of the site app
exports.initSass = function(_root) {
  if(!root) { //set root only once from the first package that calls it
    root = path.join(_root, '..'); //call is from /app/self
  }
};

exports.bundle = function(cb) {
  sassResolve(root, opts, function (err, res) {
    if (err) { console.log(err); return cb(err); }
    cb(null, res.css);
  });
};