import Ember from 'ember';
import "foundation-sites";

export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
  if (Ember.$ && Ember.typeOf(Ember.$().foundation) === 'function') {
    Ember.$().foundation();
  }
}

export default {
  name: 'zf-widget',
  initialize
};
