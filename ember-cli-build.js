/* eslint-env node */
'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');

module.exports = function(defaults) {
  let app = new EmberAddon(defaults, {
    'ember-cli-foundation-6-sass': {
      'foundationJs': 'all'
    },

    // 'ember-cli-foundation-6-sass': {
    //   'foundationJs': [
    //     'core',
    //     'util.box',
    //     'util.touch',
    //     'dropdown',
    //     'dropdownMenu',
    //   ]
    // },

    'ember-cli-babel': {
      includePolyfill: true
    },
    babel: {
      optional: ['es6.spec.symbols']
    }
  });

  /*
    This build file specifes the options for the dummy test app of this
    addon, located in `/tests/dummy`
    This build file does *not* influence how the addon or the app using it
    behave. You most likely want to be modifying `./index.js` or app's build file
  */

  return app.toTree();
};
