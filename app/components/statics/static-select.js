import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  router: service(),
  actions: {
    setSelection(selected){
      return this.get('router').transitionTo('cryptos.crypto.option', selected);
    }
  }
});
