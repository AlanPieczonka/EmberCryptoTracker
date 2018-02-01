import Component from '@ember/component';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import { resetSelect } from './../../jshelpers/helper';

export default Component.extend({
  classNames: ['ui', 'primary', 'basic', `button`], 
  router: service(),
  tagName: 'a',
  click(){
   resetSelect();
   get(this, 'router').transitionTo('cryptos.crypto', get(this, 'crypto').symbol);
  },
});
