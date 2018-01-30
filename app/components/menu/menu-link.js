import Component from '@ember/component';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
import $ from 'jquery';

const resetSelect = () => {
  $('#mySelect option').prop('selected', function(){
    return this.defaultSelected;
  });
}

export default Component.extend({
  router: service(),
  tagName: 'a',
  click(){
    resetSelect();
   get(this, 'router').transitionTo('cryptos.crypto', get(this, 'crypto').symbol);
  },
  classNames: ['ui', 'primary', 'basic', `button`], 
});
