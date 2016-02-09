import Ember from 'ember';
import zfWidget from 'ember-cli-foundation-6-sass/mixins/zf-widget';

export default Ember.Component.extend(zfWidget, {

  /** @member tag type */
  tagName: 'ul',

  /** @member Class names */
  classNames: ['horizontal', 'menu'],

  /** @member Attribute bindings */
  attributeBindings: ['data-magellan'],

  /** @member Makes the data attribute binding appear */
  'data-magellan': ' ',

  /** @member Foundation type */
  'zfType': 'Magellan',

  /** @member Foundation specific options */
  'zfOptions': ['animationDuration', 'animationEasing', 'threshold', 'threshold',
                'deepLinking', 'barOffset']
});
