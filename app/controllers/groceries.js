import Grocery from '../models/grocery';

export default Ember.Controller.extend({
  getGroceries: function() {
    // debugger
    var items = this.items;
    // debugger
    $(document).ready(function() {
      $.ajax({
        method: 'GET',
        url: 'https://grocery-list-data-source.herokuapp.com'
      })
      .done(function(data) {
        // alert('Success!');
        for (var i = 0; i < data.length; i++) {
          var item = data[i];
          // debugger
          // items.push(new Grocery.create({label: item.label}));
        }
        // debugger
      })
      .fail(function() {
        alert('Failed to find grocery store list.');
      });
    });
  }.property(),

  items: [1,2,3],

  model: function() {
    return [Grocery.create({label: "apple", price: 0.50}),Grocery.create({name: "banana", price: 1.00})];
  }.property(),

  touchFruit: function() {
    $(document).on('click', '.fruit', function(e) {
        alert('You touched a fruit!');
    });
  }.property()
});
