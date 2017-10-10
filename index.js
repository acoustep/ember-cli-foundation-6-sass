/* jshint node: true */
'use strict';
var path = require('path');
var VersionChecker = require('ember-cli-version-checker');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var fastbootTransform = require('fastboot-transform');

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
    var foundationPath = path.resolve(require.resolve('foundation-sites'), '../../dist');

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
        var babelAddon = this.addons.find(addon => addon.name === 'ember-cli-babel');

        if (isGTE6_3_0) {
          foundationPath = path.resolve(require.resolve('foundation-sites'), '../../../js'); // go deeper
        }

        foundationTree = new Funnel(foundationPath, {
          destDir: 'foundation-sites',
          files: this.jsFilesToInclude
        });

        foundationTree = babelAddon.transpileTree(foundationTree);
      }

      foundationTree = fastbootTransform(foundationTree);

      return vendorTree ? new mergeTrees([vendorTree, foundationTree]) : foundationTree;
    }

    return vendorTree;
  },


  included: function included(app) {
    this._super.included(app);
    this.app = app;
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
          this.import(path.join('vendor/foundation-sites', 'foundation.js'));
        }
      }
      else if (options.foundationJs instanceof Array) {
        options.foundationJs.forEach((componentName) => {
          var filename = 'foundation.' + componentName + '.js';
          this.jsFilesToInclude.push(filename);
          this.import(path.join('vendor/foundation-sites', filename));
        });
      }
    }
  }
};
