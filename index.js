/* jshint node: true */
'use strict';
var path = require('path');
var fs = require('fs');
var babel = require('babel-core');
var VersionChecker = require('ember-cli-version-checker');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var fastbootTransform = require('fastboot-transform');
var esTranspiler = require('broccoli-babel-transpiler');

module.exports = {
  name: 'ember-cli-foundation-6-sass',

  jsFilesToInclude: [],

  treeForVendor(vendorTree) {
    var foundationTree;
    var options = this.app.options['ember-cli-foundation-6-sass'];
    var checker = new VersionChecker(this);
    var isGTE6_3_0 = checker.for('foundation-sites', 'npm').satisfies('>=6.3.0');

    // Calculate the path using require.resolve which checks the whole path.
    // This gives us a specific file in dist/js/npm.js hence the need to path.resolve our way back up.
    var foundationPath = path.resolve(require.resolve('foundation-sites'), '../..');

    if (options && options.foundationJs) {
      if ((typeof options.foundationJs === 'string') ||
        (options.foundationJs instanceof String)) {
        if (options.foundationJs === 'all') {
          // >=6.3.0 changed some paths.
          if (isGTE6_3_0) {
            foundationPath = path.resolve(require.resolve('foundation-sites'), '../../../dist/js'); // go deeper
          }

          foundationTree = new Funnel(foundationPath, {
            destDir: 'foundation-sites',
            files: this.jsFilesToInclude
          });
        }
      } else {
        if (isGTE6_3_0) {
          foundationPath = path.resolve(require.resolve('foundation-sites'), '../../../js'); // go deeper
        }

        foundationTree = new Funnel(foundationPath, {
          destDir: 'foundation-sites',
          files: this.jsFilesToInclude
        });

        foundationTree = esTranspiler(foundationTree, {
          plugins: [
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
        });
      }
    }

    foundationTree = fastbootTransform(foundationTree);
    return new mergeTrees([vendorTree, foundationTree]);
  },


  included: function included(app) {
    this._super.included(app);
    var options = app.options['ember-cli-foundation-6-sass'];

    var checker = new VersionChecker(this);
    var isGTE6_3_0 = checker.for('foundation-sites', 'npm').satisfies('>=6.3.0');

    app.options.sassOptions = app.options.sassOptions || {};
    app.options.sassOptions.includePaths = app.options.sassOptions.includePaths || [];

    // Calculate the path using require.resolve which checks the whole path.
    // This gives us a specific file in dist/js/npm.js hence the need to path.resolve our way back up.
    var foundationPath = path.resolve(require.resolve('foundation-sites'), '../..');

    // >=6.3.0 changed some paths.
    if (isGTE6_3_0) {
      foundationPath = path.resolve(require.resolve('foundation-sites'), '../../..'); // go deeper
      var foundationFunnel = mergeTrees([new Funnel(foundationPath, {
        include: ['_vendor/**/*']
      }), new Funnel(path.join(foundationPath, 'scss'), {
        destDir: 'foundation-sites',
        include: ['**/*']
      })]);

      app.options.sassOptions.includePaths.push(foundationFunnel);
    }
    app.options.sassOptions.includePaths.push(foundationPath);

    foundationPath = mergeTrees([new Funnel(foundationPath, {
      include: ['_vendor/**/*']
    }), new Funnel(path.join(foundationPath, 'scss'), {
      destDir: 'foundation-sites',
      include: ['**/*']
    })]);

    app.options.sassOptions.includePaths.push(foundationPath);

    if (options && options.foundationJs) {
      if ((typeof options.foundationJs === 'string') ||
        (options.foundationJs instanceof String)) {
        if (options.foundationJs === 'all') {
          this.jsFilesToInclude = ['foundation.js'];
          app.import(path.join('vendor/foundation-sites', 'foundation.js'));
        }
      }
      else if (options.foundationJs instanceof Array) {
        options.foundationJs.forEach((componentName) => {
          var filename = 'foundation.' + componentName + '.js';
          this.jsFilesToInclude.push(filename);
          app.import(path.join('vendor/foundation-sites', filename));
        });
      }
    }
  }
};
