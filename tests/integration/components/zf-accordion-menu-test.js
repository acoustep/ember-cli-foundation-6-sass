import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('zf-accordion-menu', 'Integration | Component | zf accordion menu', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);
  
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  this.render(hbs`{{zf-accordion-menu}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#zf-accordion-menu}}
      template block text
    {{/zf-accordion-menu}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
