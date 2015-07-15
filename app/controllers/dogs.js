import Dog from '../models/dog';

export default Ember.Controller.extend({
  model: function() {
    return [Dog.create({name: "byron", breed: "poodle"}),Dog.create({name: "Olly", breed: "Havapoo"})]
  }.property()
)};
