import Route from '@ember/routing/route';

export default Route.extend({
  model(params){
    const symbol = params.crypto_symbol.toUpperCase(),
          crypto = this.modelFor('cryptos')
                  .find(crypto => crypto.symbol == symbol);
    return crypto;
  },
});
