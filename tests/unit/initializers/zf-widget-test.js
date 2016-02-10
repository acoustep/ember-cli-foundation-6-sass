import Ember from 'ember';
import ZfWidgetInitializer from '../../../initializers/zf-widget';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | zf widget', {
  beforeEach() {
    Ember.run(function() {
      application = Ember.Application.create();
      application.deferReadiness();
    });
  }
});

// Replace this with your real tests.
test('it works', function(assert) {
  ZfWidgetInitializer.initialize(application);

  // you would normally confirm the results of the initializer here
  assert.ok($().foundation);
});
