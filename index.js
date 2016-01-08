/* jshint node: true */
'use strict';
var path = require('path');

module.exports = {
  name: 'ember-cli-foundation-6-sass',
  included: function included(app) {
    this._super.included(app);

    var foundationPath = path.join(app.bowerDirectory, 'foundation-sites', 'scss');
    app.options.sassOptions = app.options.sassOptions || {};
    app.options.sassOptions.includePaths = app.options.sassOptions.includePaths || [];
    app.options.sassOptions.includePaths.push(foundationPath);

    // Include the js paths
    if (app.options.foundationJs) {
      if ((typeof app.options.foundationJs == 'string') ||
          (app.options.foundationJs instanceof String)) {
        if (app.options.foundationJs === 'all') {
          app.import(path.join(app.bowerDirectory, 'foundation-sites', 'dist', 'foundation.js'));
        }
      }
      else if (options.foundationJs instanceof Array) {
        options.foundationJs.forEach(function(componentName) {
          var foundationJsPath = path.join(app.bowerDirectory, 'foundation-sites', 'js');
          app.import(path.join(foundationJsPath, 'foundation.' + componentName + '.js'));
        });
      }
    }
  }
};
