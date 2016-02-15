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

  /** @member Off canvas control ids */
  'controlIds': null,

  /** @member Off canvas left section flags */
  offCanvasLeftContent: { isOffCanvasLeft: true },

  /** @member Off canvas right section flags */
  offCanvasRightContent: { isOffCanvasRight: true },

  /** @member Show left off canvas */
  showLeftOffCanvas: true,

  /** @member Show right off canvas */
  showRightOffCanvas: false,

  handlePreRender() {
    let controlIds = [];

    // Create control ids
    if (true === this.get('showLeftOffCanvas')) {
      controlIds.push('#zf-off-canvas-left');
    }
    if (true === this.get('showRightOffCanvas')) {
      controlIds.push('#zf-off-canvas-right');
    }

    // Set control ids
    this.set('controlIds', controlIds);
  }
});
