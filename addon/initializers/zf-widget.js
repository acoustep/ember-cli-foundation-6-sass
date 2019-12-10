import { typeOf } from '@ember/utils';
import $ from 'jquery';
import "foundation-sites";

export function initialize(/* application */) {
  // application.inject('route', 'foo', 'service:foo');
  if ($ && typeOf($().foundation) === 'function') {
    $().foundation();
  }
}

export default {
  name: 'zf-widget',
  initialize
};
