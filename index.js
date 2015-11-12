/* jshint node: true */
'use strict';
var path = require('path');

var path_join = function(){
  // fix path with windows back slash with path_join
  return path.join.apply(this, arguments).replace(/\\/g, '/');
};

module.exports = {
  name: 'ember-cli-foundation-6-sass',
  included: function included(app) {
    this.app = app;
    var modulePath = path.relative(app.project.root, __dirname);
    var foundationPath = 'node_modules/foundation-sites';
    app.options.sassOptions = app.options.sassOptions || {}
    app.options.sassOptions.includePaths = app.options.sassOptions.includePaths || []
    app.options.sassOptions.includePaths.push(path_join(modulePath, foundationPath, 'scss'));
  }
};
