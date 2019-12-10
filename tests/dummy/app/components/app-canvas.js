import Component from '@ember/component';
import "foundation-sites";

export default Component.extend({
  didInsertElement() {
    this.$().foundation();
  }
});
