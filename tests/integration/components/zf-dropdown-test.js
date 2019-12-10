import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | zf dropdown', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    assert.expect(1);

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

    // Template block usage:" + EOL +
    await render(hbs`
      <button class="button" data-toggle="example-dropdown">Toggle Dropdown</button>
      {{#zf-dropdown id="example-dropdown" positionClass="bottom"}}
        Example form in a dropdown.
        <form>
          <div class="row">
            <div class="medium-6 columns">
              <label>Name
                <input type="text" placeholder="Kirk, James T.">
              </label>
            </div>
            <div class="medium-6 columns">
              <label>Rank
                <input type="text" placeholder="Captain">
              </label>
            </div>
          </div>
        </form>
      {{/zf-dropdown}}
    `);

    assert.ok(find('*').textContent.indexOf('Example form in a dropdown.') > -1);

  });


  test('Handles hover and positioning properties', async function(assert) {

    await render(hbs`
      <button class="button" data-toggle="example-dropdown">Toggle Dropdown</button>
      {{#zf-dropdown id="example-dropdown" positionClass="top"}}
        Example form in a dropdown.
        <form>
          <div class="row">
            <div class="medium-6 columns">
              <label>Name
                <input type="text" placeholder="Kirk, James T.">
              </label>
            </div>
            <div class="medium-6 columns">
              <label>Rank
                <input type="text" placeholder="Captain">
              </label>
            </div>
          </div>
        </form>
      {{/zf-dropdown}}
    `);

    assert.ok(find('#example-dropdown').classList.contains('top'));

  });
});
