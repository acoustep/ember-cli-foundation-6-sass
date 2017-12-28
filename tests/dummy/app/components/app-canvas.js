import Ember from "ember";
import "foundation-sites";

export default Ember.Component.extend({
  didInsertElement() {
    this.$().foundation();
  }
});
