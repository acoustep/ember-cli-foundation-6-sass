import Ember from 'ember';
import zfWidget from 'ember-cli-foundation-6-sass/mixins/zf-widget';

export default Ember.Component.extend(zfWidget, {

  /** @member tag type */
  tagName: 'ul',

  /** @member Class names */
  classNames: ['accordion'],

  /** @member Attribute bindings */
  attributeBindings: ['data-accordion'],

  /** @member Makes the data attribute binding appear */
  'data-accordion': ' ',

  /** @member Foundation type */
  'zfType': 'Accordion',

  /** @member Foundation specific options */
  'zfOptions': ['slideSpeed', 'multiExpand', 'allowAllClosed'],

  update: Ember.on('didUpdate', function() {
    this._setup();
  }),
});
