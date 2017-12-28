/* global require, module */
/* eslint-env node */
'use strict';

var path = require('path');
var VersionChecker = require('ember-cli-version-checker');
var Funnel = require('broccoli-funnel');
var mergeTrees = require('broccoli-merge-trees');
var fastbootTransform = require('fastboot-transform');
var writeFile = require('broccoli-file-creator');
var Rollup = require('broccoli-rollup');
var nodeResolve = require('rollup-plugin-node-resolve');
var legacy = require('rollup-plugin-legacy');

module.exports = {
  name: 'ember-cli-foundation-6-sass',

  jsFilesToInclude: [],

  treeForVendor(vendorTree) {
    var foundationTree;
    var babelAddon = this.addons.find(addon => addon.name === 'ember-cli-babel');
    var options = this.app.options['ember-cli-foundation-6-sass'];
    var checker = new VersionChecker(this);
    var isGTE6_4_0 = checker.for('foundation-sites', 'npm').satisfies('>=6.4.0');
    var foundationJSContent;
    var addonPath;

    if (options && options.foundationJs) {
      if ((typeof options.foundationJs === 'string') ||
        (options.foundationJs instanceof String)) {
        if (options.foundationJs === 'all') {
          addonPath = path.resolve(__dirname, 'addon');

          foundationTree = new Rollup(addonPath, {
            rollup: {
              entry: '-private/foundation.js',
              format: 'es',
              dest: 'foundation-sites.js',
              plugins: [
                nodeResolve(),
                legacy({
                  // 6.4
                  'node_modules/foundation-sites/js/entries/plugins/foundation.core.js': 'window.Foundation',
                  // 6.3.1
                  'node_modules/foundation-sites/dist/js/foundation.js': 'window.Foundation',
                  // 6.2.4
                  'node_modules/foundation-sites/dist/foundation.js': 'window.Foundation'
                })
              ],
              external: [
                'jquery'
              ]
            }
          });
        }
      } else {
        if (isGTE6_4_0) {
          foundationJSContent = 'export { default } from \'foundation-sites/js/entries/plugins/foundation.core\';\n';

          foundationJSContent += this.jsFilesToInclude.filter((file) => {
            // Exclude foundation.core because it's imported by default;
            return file !== 'foundation.core.js';
          }).map(function(file) {
            return 'import \'foundation-sites/js/entries/plugins/' + file.replace('.js', '') + '\';';
          }).join('\n');
        } else {
            foundationJSContent = 'export { default } from \'foundation-sites/js/foundation.core\';\n';

            foundationJSContent += this.jsFilesToInclude.filter((file) => {
              // Exclude foundation.core because it's imported by default;
              return file !== 'foundation.core.js';
            }).map(function(file) {
              return 'import \'foundation-sites/js/' + file.replace('.js', '') + '\';';
            }).join('\n');
        }

        foundationTree = new Rollup(writeFile('foundation.js', foundationJSContent), {
          rollup: {
            entry: 'foundation.js',
            format: 'es',
            dest: 'foundation-sites.js',
            plugins: [
              nodeResolve(),
              legacy({
                // In 6.4, foundation-sites/js/entries/plugins/foundation.core doesn't export anything, so we need to use legacy to export some things.
                'node_modules/foundation-sites/js/entries/plugins/foundation.core.js': {
                  Foundation: 'window.Foundation',
                  default: 'window.Foundation'
                },
                // 6.2.4 and 6.3.1
                'node_modules/foundation-sites/js/foundation.core.js': 'window.Foundation'
              })
            ],
            external: [
              'jquery'
            ]
          }
        });
      }
      foundationTree = babelAddon.transpileTree(foundationTree);

      foundationTree = fastbootTransform(foundationTree);

      return vendorTree ? new mergeTrees([vendorTree, foundationTree]) : foundationTree;
    }

    return vendorTree;
  },

  treeForPublic() {
    var hasFastBoot = this.project.addons.some(addon => addon.name === 'ember-cli-fastboot');
    var publicTree = this._super.treeForPublic.apply(this, arguments);
    var trees = [];

    if (publicTree && hasFastBoot) {
      trees.push(publicTree);
    }

    return mergeTrees(trees);
  },

  updateFastBootManifest(manifest) {
    manifest.vendorFiles.push('ember-cli-foundation-6-sass/fastboot-foundation.js');

    return manifest;
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

          this.import('vendor/foundation-sites.js');
        }
      }
      else if (options.foundationJs instanceof Array) {
        options.foundationJs.forEach((componentName) => {
          var filename = 'foundation.' + componentName + '.js';
          this.jsFilesToInclude.push(filename);
        });

        this.import('vendor/foundation-sites.js');
      }
    }
  }
};
