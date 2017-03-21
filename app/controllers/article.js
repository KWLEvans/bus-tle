import Ember from 'ember';

export default Ember.Controller.extend({
  showUpdateForm: false,
  actions: {
    showUpdateForm() {
      this.set('showUpdateForm', true);
    },
    updateArticle(article, params) {
      this.set('showUpdateForm', false);
      Object.keys(params).forEach(function(key) {
        if (params[key] !== undefined) {
          article.set(key, params[key]);
        }
      });
      article.save();
      this.transitionToRoute('article');
    }
  }
});
