import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('zf-drilldown-menu', 'Integration | Component | zf drilldown menu', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });" + EOL + EOL +

  //this.render(hbs`{{zf-drilldown-menu}}`);

  //assert.equal(this.$().text().trim(), '');

  // Template block usage:" + EOL +
  this.render(hbs`
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

  assert.ok(this.$().text().indexOf('Item 1') > -1);

});
