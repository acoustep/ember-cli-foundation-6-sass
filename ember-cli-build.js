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
    //     'abide',
    //     'accordion',
    //     'accordionMenu',
    //     'drilldown',
    //     'dropdown',
    //     'dropdownMenu',
    //     'equalizer',
    //     'interchange',
    //     'magellan',
    //     'offcanvas',
    //     'orbit',
    //     'responsiveMenu',
    //     'responsiveToggle',
    //     'reveal',
    //     'slider',
    //     'sticky',
    //     'tabs',
    //     'toggler',
    //     'tooltip',
    //     'util.box',
    //     'util.keyboard',
    //     'util.mediaQuery',
    //     'util.motion',
    //     'util.nest',
    //     // This is renamed in 6.4 from util.timerAndImageLoader to util.timer
    //     // 'util.timerAndImageLoader',
    //     'util.timer',
    //     'util.touch',
    //     'util.triggers'
    //   ]
    // },

    'ember-cli-babel': {
      includePolyfill: true
    },
    babel: {
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
