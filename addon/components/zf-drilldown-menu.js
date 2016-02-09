import Ember from 'ember';
import zfWidget from 'ember-cli-foundation-6-sass/mixins/zf-widget';

export default Ember.Component.extend(zfWidget, {
  
  /** @member tag type */
  tagName: 'ul',

  /** @member Class names */
  classNames: ['vertical', 'menu'],

  /** @member Attribute bindings */
  attributeBindings: ['data-drilldown'],

  /** @member Makes the data attribute binding appear */
  'data-drilldown': ' ',

  /** @member Foundation type */
  'zfType': 'Drilldown',

  /** @member Foundation specific options */
  'zfOptions': ['backButton', 'wrapper', 'closeOnClick']
});
