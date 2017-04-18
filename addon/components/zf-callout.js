import Ember from 'ember';
import layout from '../templates/components/zf-callout';

const {computed} = Ember;

// Note: this doesn't use the zfWidget mixin since this isn't part of the
// Foundation javascript.
export default Ember.Component.extend({
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
