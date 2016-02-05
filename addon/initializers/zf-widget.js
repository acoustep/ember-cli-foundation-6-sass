import Ember from 'ember';


export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
  Ember.$().foundation();
}

export default {
  name: 'zf-widget',
  initialize
};
