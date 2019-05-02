import Application from '@ember/application';
import { run } from '@ember/runloop';
import ZfWidgetInitializer from '../../../initializers/zf-widget';
import { module, test } from 'qunit';

let application;

module('Unit | Initializer | zf widget', function(hooks) {
  hooks.beforeEach(function() {
    run(function() {
      application = Application.create();
      application.deferReadiness();
    });
  });

  // Replace this with your real tests.
  test('it works', function(assert) {
    ZfWidgetInitializer.initialize(application);

    // you would normally confirm the results of the initializer here
    assert.ok($().foundation);
  });
});
