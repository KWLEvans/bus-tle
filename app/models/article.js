import DS from 'ember-data';

export default DS.Model.extend({
  headline: DS.attr(),
  author: DS.attr(),
  image: DS.attr(),
  content: DS.attr(),
  teaser: Ember.computed('content', function() {
    return this.get('content').slice(0, 100);
  }),
});
