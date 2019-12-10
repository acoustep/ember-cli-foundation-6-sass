import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | zf drilldown menu', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    //this.render(hbs`{{zf-drilldown-menu}}`);

    //assert.equal(this.$().text().trim(), '');

    // Template block usage:" + EOL +
    await render(hbs`
      {{#zf-drilldown-menu}}
        <li>
          <a href="#">Item 1</a>
          <ul class="vertical menu">
            <li><a href="#">Item 1A</a></li>
          </ul>
        </li>
        <li><a href="#">Item 2</a></li>
      {{/zf-drilldown-menu}}
    `);

    assert.ok(find('*').textContent.indexOf('Item 1') > -1);

  });
});
