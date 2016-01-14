/* jshint node: true */
'use strict';
var path = require('path');

module.exports = {
  name: 'ember-cli-foundation-6-sass',
  included: function included(app) {
    this._super.included(app);
    var options = app.options['ember-cli-foundation-6-sass'];

    var foundationPath = path.join(app.bowerDirectory, 'foundation-sites', 'scss');
    app.options.sassOptions = app.options.sassOptions || {};
    app.options.sassOptions.includePaths = app.options.sassOptions.includePaths || [];
    app.options.sassOptions.includePaths.push(foundationPath);

    // Include the js paths
    if (options && options.foundationJs) {
      if ((typeof options.foundationJs == 'string') ||
          (options.foundationJs instanceof String)) {
        if (options.foundationJs === 'all') {
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
