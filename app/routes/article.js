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
    },

    updateArticle(article, params) {
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          article.set(key, params[key]);
        }
      });
      article.save();
      this.transitionTo('article');
    }
  }
});
