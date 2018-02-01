import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('statics/static-footer', 'Integration | Component | statics/static footer', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{statics/static-footer}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#statics/static-footer}}
      template block text
    {{/statics/static-footer}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
