import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import { inject as service } from '@ember/service';

export default Route.extend({
  router: service(),
  model(params){
    console.log('fkin transition tshrough buttons');
    const symbol = params.crypto_symbol.toUpperCase(),
          crypto = this.modelFor('cryptos')
                  .find(crypto => crypto.symbol == symbol);
    return crypto;
  },
  afterModel(model, transition){
    if(transition.targetName !== 'cryptos.crypto.option'){
      this.get('router').transitionTo('cryptos.crypto.option', 'price_usd');
    }
  }
});
