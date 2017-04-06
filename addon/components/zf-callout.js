import Ember from 'ember';
import layout from '../templates/components/zf-callout';
import zfWidget from 'ember-cli-foundation-6-sass/mixins/zf-widget';

const {computed} = Ember;

export default Ember.Component.extend(zfWidget, {
  layout: layout,
  type: '',
  content: null,
  classNameBindings: ['alertType', 'active', 'exiting', 'flashType'],
  classNames: ['callout'],

  // handle bindings for ember-cli-flash integration
  flashType: computed('flash.type', function() {
    return this.get('flash.type');
  }),

  // handle bindings for regular integration
  alertType: computed('type', function() {
    return this.get('type');
  })
});
