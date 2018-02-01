import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { changeSelect } from './../../jshelpers/helper';

const { getOwner } = Ember;

export default Component.extend({
  router: service(),
  didInsertElement(){
    const url = getOwner(this).lookup('controller:application').target.currentURL;
    changeSelect(url);
  },
  actions: {
    setSelection(selected){
      return this.get('router').transitionTo('cryptos.crypto.option', selected);
    }
  }
});
