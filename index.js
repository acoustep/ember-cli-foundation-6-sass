/* jshint node: true */
'use strict';
var path = require('path');
var fs = require('fs');
var babel = require('babel-core');

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
          app.import(path.join(app.bowerDirectory, 'foundation-sites', 'dist', 'js', 'foundation.js'));
        }
      }
      else if (options.foundationJs instanceof Array) {
        options.foundationJs.forEach(function(componentName) {
          var foundationJsPath = path.join(app.bowerDirectory, 'foundation-sites', 'js');
          var es5code = babel.transformFileSync(path.join(foundationJsPath, 'foundation.' + componentName + '.js'), {
            'plugins': [
              require.resolve('babel-plugin-transform-es2015-arrow-functions'),
              require.resolve('babel-plugin-transform-es2015-block-scoped-functions'),
              require.resolve('babel-plugin-transform-es2015-block-scoping'),
              require.resolve('babel-plugin-transform-es2015-classes'),
              require.resolve('babel-plugin-transform-es2015-destructuring'),
              require.resolve('babel-plugin-transform-es2015-modules-commonjs'),
              require.resolve('babel-plugin-transform-es2015-parameters'),
              require.resolve('babel-plugin-transform-es2015-shorthand-properties'),
              require.resolve('babel-plugin-transform-es2015-spread'),
              require.resolve('babel-plugin-transform-es2015-template-literals')
            ]
          }).code;
          var filenameAndPath = path.join(foundationJsPath, 'foundation.' + componentName + '.es5.js');
          fs.writeFileSync(filenameAndPath, es5code);
          app.import(filenameAndPath);
        });
      }
    }
  }
};
