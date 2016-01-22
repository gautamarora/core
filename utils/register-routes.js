var path = require('path');
var fs = require('fs');

module.exports = function(root, dir, app, express) {
  var normalizedPath = path.join(root, dir);
  fs.readdirSync(normalizedPath).forEach(function(file) { //sync
    if(path.extname(file) === '.js') {
      //keeping the .js in require works
      var route = require(normalizedPath + '/' + file);
      route(app, express);
    }
  });
};

