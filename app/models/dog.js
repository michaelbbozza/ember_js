export default Ember.Object.extend({
  say: function(){
    var name = this.get('name');
    alert(name);
  },

  selfPromote: function() {
    return "everyone loves my new show on Bravo!"
  }.property()
});
