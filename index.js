/* jshint node: true */
'use strict';
var path = require('path');
var fs = require('fs');
var VersionChecker = require('ember-cli-version-checker');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var fastbootTransform = require('fastboot-transform');
var esTranspiler = require('broccoli-babel-transpiler');


module.exports = {
  name: 'ember-cli-foundation-6-sass',

  jsFilesToInclude: [],

  treeForVendor(vendorTree) {
    let foundationTree;
    let options = this.app.options['ember-cli-foundation-6-sass'];
    let foundationPath;
    let checker = new VersionChecker(this);
    let isGTE6_3_0 = checker.for('foundation-sites', 'bower').satisfies('>=6.3.0');

    if (options && options.foundationJs) {
      if ((typeof options.foundationJs === 'string') ||
        (options.foundationJs instanceof String)) {
        if (options.foundationJs === 'all') {
          // >=6.3.0 changed some paths.
          if (isGTE6_3_0) {
            foundationPath = path.join(this.app.bowerDirectory, 'foundation-sites', 'dist', 'js');
          } else {
            foundationPath = path.join(this.app.bowerDirectory, 'foundation-sites', 'js');
          }
        }
      } else if (options.foundationJs instanceof Array) {
        foundationPath = path.join(this.app.bowerDirectory, 'foundation-sites', 'js');
      }
    }

    if ( this.jsFilesToInclude === ['foundation.js'] ) {
      foundationTree = new Funnel(foundationPath, {
        destDir: 'foundation-sites',
        files: this.jsFilesToInclude
      })
    } else {
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

    foundationTree = fastbootTransform(foundationTree);

    return new mergeTrees([vendorTree, foundationTree]);
  },

  included: function included(app) {
    this._super.included(app);
    var options = app.options['ember-cli-foundation-6-sass'];
    var foundationPath = path.join(app.bowerDirectory, 'foundation-sites');

    app.options.sassOptions = app.options.sassOptions || {};
    app.options.sassOptions.includePaths = app.options.sassOptions.includePaths || [];

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
          let filename = 'foundation.' + componentName + '.js';
          this.jsFilesToInclude.push(filename);
          app.import(path.join('vendor/foundation-sites', filename));
        });
      }
    }
  }

};
