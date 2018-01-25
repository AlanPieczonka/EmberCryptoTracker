import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('charts/chart-price', 'Integration | Component | charts/chart price', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{charts/chart-price}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#charts/chart-price}}
      template block text
    {{/charts/chart-price}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
