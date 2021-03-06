import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveArticle() {
      var params = {
        headline: this.get('headline'),
        author: this.get('author'),
        image: this.get('image'),
        content: this.get('content'),
      }
      this.sendAction('saveArticle', params);
    }
  }
});
