import Route from '@ember/routing/route';
import { set } from '@ember/object';
import RSVP from 'rsvp';

export default Route.extend({
  model(params){
    console.log(params.option);
    return RSVP.hash({
      crypto: this.modelFor('cryptos.crypto'),
      option: params.option
    });
  }
});
