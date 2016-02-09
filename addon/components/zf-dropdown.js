import Ember from 'ember';
import zfWidget from 'ember-cli-foundation-6-sass/mixins/zf-widget';

export default Ember.Component.extend(zfWidget, {
  /** @member Class names */
  classNames: ['dropdown-pane'],

  /** @member Attribute bindings */
  attributeBindings: ['data-dropdown', 'data-auto-focus'],

  /** @member Makes the data attribute binding appear */
  'data-dropdown': ' ',

  'data-auto-focus': true,

  /** @member Foundation type */
  'zfType': 'Dropdown',

  /** @member Foundation specific options */
  'zfOptions': ['hoverDelay', 'hover', 'hoverPane', 'vOffset', 'hOffset', 'positionClass',
                'trapFocus', 'autoFocus', 'closeOnClick']
});
