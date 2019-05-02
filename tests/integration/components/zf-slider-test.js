import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | zf slider', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    // Template block usage:" + EOL +
    let done = assert.async();

    await render(hbs`
      {{#zf-slider }}
        <span class="slider-handle"  data-slider-handle role="slider" tabindex="1"></span>
        <span class="slider-fill" data-slider-fill></span>
        <input type="hidden">
      {{/zf-slider}}
    `);

    assert.equal(find('.slider-handle').getAttribute('role'), 'slider');

    // changed.zf.slider is always executed, even if the slider hasn't actually moved.
    // Use it to async complete this test.
    this.$('.slider').on('changed.zf.slider', done);

  });
});
