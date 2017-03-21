import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateForm: false,
  actions: {
    showUpdateForm() {
      this.set('showUpdateForm', true);
    },

    updateArticle(article) {
      var params = {
        headline: this.get('headline'),
        author: this.get('author'),
        image: this.get('image'),
        content: this.get('content'),
      }
      this.set('showUpdateForm', false);
      this.sendAction('updateArticle', article, params);
    }
  }
});
