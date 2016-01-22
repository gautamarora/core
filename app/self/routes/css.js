var sass = require('../../../utils/init-sass');

var cachedCss;

module.exports = function(app) {
  app.get('/bundle.css', function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/css' });
    if(cachedCss) {
      console.log("Returning cached CSS bundle.");
      return res.end(cachedCss);
    }
    console.log("Bundling CSS...");
    sass.bundle(function (err, css) {
      if (err) { console.log(err); throw err; }
      console.log("CSS Bundle done!");
      cachedCss = css;
      return res.end(css);
    });
  });
};