import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { get } from '@ember/object';
import $ from 'jquery'; 

export default Route.extend({
 // to do: return all cryptos
  store: service(),
  model(){
    console.log($.getJSON('https://api.coinmarketcap.com/v1/ticker/?limit=10'));
    return $.getJSON('https://api.coinmarketcap.com/v1/ticker/?limit=10');
  }
});
