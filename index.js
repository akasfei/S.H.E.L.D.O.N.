var crypto = require('crypto');

function App() {
  var manifest = require('./manifest.json');
  for (var prop in manifest) {
    this[prop] = manifest[prop];
  }
  this.routes = [];
  this.pkg = require('./package.json');
  this.bower = require('./bower.json');
  return this;
}

var app = new App();

module.exports = app;
