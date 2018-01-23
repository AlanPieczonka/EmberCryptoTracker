import Route from '@ember/routing/route';
import $ from 'jquery'; 

export default Route.extend({
  model(){
    return $.getJSON('https://api.coinmarketcap.com/v1/ticker/?limit=8');
  }
});
