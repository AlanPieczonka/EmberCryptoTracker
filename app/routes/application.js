import Route from '@ember/routing/route';

export default Route.extend({
  redirect(model, transition){
    if(transition.targetName == 'index'){
      this.transitionTo('cryptos');
    }
  }
});
