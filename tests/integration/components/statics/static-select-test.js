import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('statics/static-select', 'Integration | Component | statics/static select', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{statics/static-select}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#statics/static-select}}
      template block text
    {{/statics/static-select}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
