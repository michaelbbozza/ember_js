export default Ember.Object.extend({
  say: function(){
    var name = this.get('name');
    alert(name);
  }.property()
});
