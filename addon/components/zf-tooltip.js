import Ember from 'ember';
import zfWidget from 'ember-cli-foundation-6-sass/mixins/zf-widget';

export default Ember.Component.extend(zfWidget, {

  /** @member tag type */
  tagName: 'span',

  /** @member Class names */
  classNames: ['has-tip'],

  /** @member Attribute bindings */
  attributeBindings: ['data-tooltip', 'aria-haspopup', 'data-disable-hover', 'title'],

  /** @member Makes the data attribute binding appear */
  'data-tooltip': ' ',

  /** @member ARIA popup flag */
  'aria-haspopup': 'true',

  /** @member Enable hover */
  'data-disable-hover': 'false',

  /** @member Tooltip text */
  'title': '',

  /** @member Foundation type */
  'zfType': 'Tooltip',

  /** @member Foundation specific options */
  'zfOptions': ['hoverDelay', 'fadeInDuration', 'fadeOutDuration', 'disableHover',
                'templateClasses', 'tooltipClass', 'triggerClass', 'showOn', 'zf-template',
                'tipText', 'clickOpen', 'positionClass', 'vOffset', 'hOffset']
});
