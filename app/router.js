import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('cryptos', function() {
    this.route('crypto', { path: '/:crypto_symbol'}, function() {
      this.route('option', { path: '/:option'});
    });
  });
});

export default Router;
