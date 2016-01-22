var fs = require('fs');
var path = require('path');

var Handlebars = require('handlebars');

module.exports = function(_root, file, data, cb) {
  var root = path.join(_root, '..', '..', '..', 'templates'); //call is from /app/self
  var normalizedPath = path.join(root, file + '.hbs');
  fs.readFile(normalizedPath, 'utf8', function(err, template) { //async
    if(err) return cb(err);
    var html = Handlebars.compile(template)(data);
    cb(null, html);
  });
};