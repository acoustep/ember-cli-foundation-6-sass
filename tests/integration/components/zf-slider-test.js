import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('zf-slider', 'Integration | Component | zf slider', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  // Template block usage:" + EOL +
  let done = assert.async();

  this.render(hbs`
    {{#zf-slider }}
      <span class="slider-handle"  data-slider-handle role="slider" tabindex="1"></span>
      <span class="slider-fill" data-slider-fill></span>
      <input type="hidden">
    {{/zf-slider}}
  `);

  assert.equal(this.$('.slider-handle').attr('role'), 'slider');

  // changed.zf.slider is always executed, even if the slider hasn't actually moved.
  // Use it to async complete this test.
  this.$('.slider').on('changed.zf.slider', done);

});
