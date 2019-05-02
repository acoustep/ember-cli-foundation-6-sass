import Component from '@ember/component';
import { computed } from '@ember/object';
import { assert } from '@ember/debug';
import zfWidget from 'ember-cli-foundation-6-sass/mixins/zf-widget';

export default Component.extend(zfWidget, {
  /** @member Class names */
  classNames: ['dropdown-pane'],

  /* @member Position class name */
  classNameBindings: ['_position'],

  /** @member Attribute bindings */
  attributeBindings: ['data-dropdown', 'data-auto-focus', 'data-hover', 'data-hover-pane'],

  /** @member Makes the data attribute binding appear */
  'data-dropdown': ' ',

  'data-auto-focus': true,

  /** @member enables hover options **/
  'zfHover': false,
  'data-hover': computed('zfHover', function() {
    return this.get('zfHover');
  }),
  'data-hover-pane': computed('zfHover', function() {
    return this.get('zfHover');
  }),

  /** @member Foundation type */
  'zfType': 'Dropdown',

  /** @private  Hanlde attribute bindings for position **/
  _position: computed('positionClass', function() {
    let allowedPositions = ['top', 'right', 'left', 'bottom'];
    let position = this.get('positionClass');
    assert('Must provide a valid foundation position for dropdown', allowedPositions.includes(position));

    return position;
  }),

  /** @member Foundation specific options */
  'zfOptions': ['hoverDelay', 'hover', 'hoverPane', 'vOffset', 'hOffset', 'positionClass',
                'trapFocus', 'autoFocus', 'closeOnClick']
});
