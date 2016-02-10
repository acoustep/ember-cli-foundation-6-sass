import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('zf-off-canvas', 'Integration | Component | zf off canvas', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#zf-off-canvas as |section|}}
      <div class="off-canvas position-left" id="off-canvas" data-off-canvas>
        <p>Example off canvas content</p>
      </div>
      <div class="off-canvas-content" data-off-canvas-content>
        <p>Leeroy Jenkins</p>
      </div>
    {{/zf-off-canvas}}
  `);

  assert.ok(this.$().text().indexOf('Leeroy Jenkins') > -1);

});
