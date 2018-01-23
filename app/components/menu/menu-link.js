import Component from '@ember/component';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  tagName: 'a',
  click(){
    get(this, 'router').transitionTo('cryptos.crypto', get(this, 'symbol'));
  },
  classNames: ['ui', 'primary', 'basic', `button`], 
});
