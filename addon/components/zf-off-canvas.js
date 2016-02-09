import Ember from 'ember';
import zfWidget from 'ember-cli-foundation-6-sass/mixins/zf-widget';
import layout from '../templates/components/zf-off-canvas';


export default Ember.Component.extend(zfWidget, {

  /** @member Layout */
  layout: layout,

  /** @member Class names */
  classNames: ['off-canvas-wrapper'],

  /** @member Makes the data attribute binding appear */
  'off-canvas-wrapper': '',

  /** @member Foundation type */
  'zfType': 'OffCanvas',

  /** @member Foundation specific options */
  'zfOptions': ['closeOnClick', 'transitionTime', 'position', 'forceTop', 'isRevealed',
                'revealOn', 'autoFocus', 'revealClass', 'trapFocus'],

  'controlId': '#off-canvas'
});
