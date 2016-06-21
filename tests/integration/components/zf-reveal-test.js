import { moduleForComponent, test } from 'ember-qunit';
import $ from 'jquery';
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

  assert.equal($('.reveal-overlay').text().trim(), 'template block text');
});

test('it destroys the reveal-overlay', function(assert) {
  assert.expect(2);

  this.set('enableReveal', true);

  this.render(hbs`
    {{#if enableReveal}}
      {{#zf-reveal}}
        template block text
      {{/zf-reveal}}
    {{/if}}
  `);

  assert.equal($('.reveal-overlay').length, 1);

  this.set('enableReveal', false);

  assert.equal($('.reveal-overlay').length, 0);
});
