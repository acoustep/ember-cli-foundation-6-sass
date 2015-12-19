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
  }
};
