import Ember from 'ember';
import zfWidget from 'ember-cli-foundation-6-sass/mixins/zf-widget';

const { computed, assert } = Ember;

export default Ember.Component.extend(zfWidget, {
  /** @member Class names */
  classNames: ['dropdown-pane'],

  /* @member Position class name */
  classNameBindings: ['_position'],

  /** @member Attribute bindings */
  attributeBindings: ['data-dropdown', 'data-auto-focus', 'data-hover', 'data-hover-pane',
                      'data-position', 'data-alignment'],

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

  /** @private Handle attribute bindings for position **/
  _position: computed('positionClass', function() {
    let allowedPositions = ['top', 'right', 'left', 'bottom'];
    let position = this.get('positionClass');

    if (Ember.isBlank(this.get('data-position')) && Ember.isBlank(this.get('data-alignment'))) {
      assert('Must provide a valid foundation position for dropdown', allowedPositions.includes(position));
    }

    return position;
  }),

  /** @member Foundation specific options */
  'zfOptions': ['hoverDelay', 'hover', 'hoverPane', 'vOffset', 'hOffset', 'positionClass',
                'trapFocus', 'autoFocus', 'closeOnClick']
});
