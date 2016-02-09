import Ember from 'ember';
import zfWidget from 'ember-cli-foundation-6-sass/mixins/zf-widget';

export default Ember.Component.extend(zfWidget, {

  /** @member Class names */
  classNames: ['slider'],

  /** @member Attribute bindings */
  attributeBindings: ['data-slider', 'data-initial-start:inital-start', 'data-end:end-value'],

  /** @member Makes the data attribute binding appear */
  'data-slider': ' ',

  /** @member Start value of slider */
  'initial-start': 50,

  /** @member End value of slider */
  'end-value': 200,

  /** @member Foundation type */
  'zfType': 'Slider',

  /** @member Foundation specific options */
  'zfOptions': ['start', 'end', 'step', 'initialStart', 'initialEnd', 'binding', 'clickSelect',
                'vertical', 'draggable', 'disabled', 'doubleSided', 'decimal', 'moveTime',
                'disabledClass']
});
