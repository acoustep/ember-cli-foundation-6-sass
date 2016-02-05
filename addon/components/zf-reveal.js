import Ember from 'ember';
import zfWidget from 'ember-cli-foundation-6-sass/mixins/zf-widget';

export default Ember.Component.extend(zfWidget, {

  /** @member Class names */
  classNames: ['reveal'],

  /** @member Attribute bindings */
  attributeBindings: ['data-reveal'],

  /** @member Makes the data attribute binding appear */
  'data-reveal': ' ',

  /** @member Foundation type */
  'zfType': 'Reveal',

  /** @member Foundation specific options */
  'zfOptions': ['showDelay', 'showDelay', 'closeOnClick', 'closeOnEsc', 'multipleOpened',
                'vOffset', 'hOffset', 'fullScreen', 'btmOffsetPct', 'overlay', 'resetOnClose',
                'deepLink'],

  /**
   * Show dialog
   */
  show() {
    this.get('zfUi').show();
  },



  /**
   * Hide dialog
   */
  close() {
    this.get('zfUi').close();
  },



  /**
   * Toggle state of dialog
   */
  toggle() {
    this.get('zfUi').toggle();
  }
});