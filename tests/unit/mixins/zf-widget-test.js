import Ember from 'ember';
import zfWidgetMixin from '../../../mixins/zf-widget';
import { module, test } from 'qunit';

module('Unit | Mixin | zf widget');

// Replace this with your real tests.
test('it works', function(assert) {
  let ZfWidgetObject = Ember.Object.extend(ZfWidgetMixin);
  let subject = ZfWidgetObject.create();
  assert.ok(subject);
});
