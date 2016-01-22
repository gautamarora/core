var path = require('path');
var fs = require('fs');

var app = path.join(__dirname, '..');
var root = path.join(app, '..');
var templates = path.join(root, 'templates');

var Handlebars = require('handlebars');

module.exports = function(_root, dir, prefix) {
  var root = path.join(_root, '..', '..', 'templates'); //call is from /app
  var normalizedPath = path.join(root, dir);
  fs.readdirSync(normalizedPath).forEach(function(file) { //sync
    if(path.extname(file) === '.hbs') {
      var fullPath = require.resolve(normalizedPath + '/' + file);
      var fileName = file.slice(0, -4); //.hbs is 4 chars
      var id = prefix +'-'+ fileName;
      var tmpl = fs.readFileSync(fullPath, 'utf8'); //sync
      Handlebars.registerPartial(id, tmpl);
    }
  });
};

