import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('zf-dropdown', 'Integration | Component | zf dropdown', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  // Template block usage:" + EOL +
  this.render(hbs`
    <button class="button" data-toggle="example-dropdown">Toggle Dropdown</button>
    {{#zf-dropdown id="example-dropdown"}}
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

  assert.ok(this.$().text().indexOf('Example form in a dropdown.') > -1);

});


test('Handles hover and positioning properties', function(assert) {

  this.render(hbs`
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

  assert.ok(this.$('#example-dropdown').hasClass('top'));

});
