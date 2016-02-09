import Ember from 'ember';
import zfWidget from 'ember-cli-foundation-6-sass/mixins/zf-widget';

export default Ember.Component.extend(zfWidget, {

  /** @member tag type */
  tagName: 'ul',

  /** @member Class names */
  classNames: ['dropdown', 'menu'],

  /** @member Attribute bindings */
  attributeBindings: ['data-dropdown-menu'],

  /** @member Makes the data attribute binding appear */
  'data-dropdown-menu': ' ',

  /** @member Foundation type */
  'zfType': 'DropdownMenu',

  /** @member Foundation specific options */
  'zfOptions': ['disableHover', 'autoclose', 'hoverDelay', 'clickOpen', 'closingTime',
                'alignment', 'closeOnClick', 'verticalClass', 'rightClass', 'forceFollow']
});
