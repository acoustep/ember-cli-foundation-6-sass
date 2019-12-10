import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | zf off canvas', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    // Template block usage:" + EOL +
    await render(hbs`
      {{#zf-off-canvas as |section|}}
        <div class="off-canvas position-left" id="off-canvas" data-off-canvas>
          <p>Example off canvas content</p>
        </div>
        <div class="off-canvas-content" data-off-canvas-content>
          <p>Leeroy Jenkins</p>
        </div>
      {{/zf-off-canvas}}
    `);

    assert.ok(find('*').textContent.indexOf('Leeroy Jenkins') > -1);

  });
});
