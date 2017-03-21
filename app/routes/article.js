import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('article', params.article_id);
  },

  actions: {
    destroyArticle(article) {
      if (confirm("Are you sure you want to destroy this dank content?")) {
        article.destroyRecord();
        this.transitionTo('index');
      }
    }
  }
});
