import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('zf-reveal', 'Integration | Component | zf reveal', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  // this.render(hbs`{{zf-reveal}}`);

  // assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
    {{#zf-reveal}}
      template block text
    {{/zf-reveal}}
  `);

  assert.ok(this.$());
  //assert.equal(this.$().text().trim(), 'template block text')
  //assert.equal(this.$().text().trim(), 'template block text');
});

test('it destroys the reveal-overlay', function(assert) {
  assert.expect(1);

  this.set('enableReveal', true);

  this.render(hbs`
    {{#if enableReveal}}
      {{#zf-reveal}}
        template block text
      {{/zf-reveal}}
    {{/if}}
  `);

  //assert.equal(this.$('.reveal').length, 1);

  this.set('enableReveal', false);

  assert.ok(this.$());
});
