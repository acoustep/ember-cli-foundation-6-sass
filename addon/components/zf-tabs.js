import Component from '@ember/component';
import zfWidget from 'ember-cli-foundation-6-sass/mixins/zf-widget';

export default Component.extend(zfWidget, {

  /** @member tag type */
  tagName: 'ul',

  /** @member Class names */
  classNames: ['tabs'],

  /** @member Attribute bindings */
  attributeBindings: ['data-tabs'],

  /** @member Makes the data attribute binding appear */
  'data-tabs': ' ',

  /** @member Foundation type */
  'zfType': 'Tabs',

  /** @member Foundation specific options */
  'zfOptions': ['autoFocus', 'wrapOnKeys', 'matchHeight', 'linkClass', 'panelClass']
});
