import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return fetch('https://api.coinmarkeftcap.com/v1/ticker/?limit=8')
          .then(response => response.json())
          .catch(err => console.error(err))
  }
});
