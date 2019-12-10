import $ from 'jquery';
import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | zf reveal', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    // this.render(hbs`{{zf-reveal}}`);

    // assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    await render(hbs`
      {{#zf-reveal}}
        template block text
      {{/zf-reveal}}
    `);

    assert.ok(this.$());
    //assert.equal(this.$().text().trim(), 'template block text')
    //assert.equal(this.$().text().trim(), 'template block text');
  });

  test('it destroys the reveal-overlay', async function(assert) {
    assert.expect(2);

    await render(hbs`
      {{#zf-reveal}}
        template block text
      {{/zf-reveal}}
    `);

    assert.equal($('.reveal-overlay').length, 1);

    await render(hbs`
      Hello World
    `);

    assert.equal($('.reveal-overlay').length, 0);
  });
});
