import Dog from '../models/dog';

export default Ember.Controller.extend({
  model: function() {
    return [Dog.create({name: "byron", breed: "poodle"}),Dog.create({name: "Olly", breed: "Havapoo"})]
  }.property()
  // model: Dog.create({name: "Larry", breed: "cute"})

    // var info = "Mike's dog";
    // return info;
  // }
  // dog: function(){
  //   this.createDoggy(),
  //   this.name = doggy.name,
  //   this.breed = doggy.breed
  // },

  // createDoggy: function(){
  //   var doggy = Dog.create({
  //     name: "Spike",
  //     breed: "German Shephard"
  //   })
  //   return doggy
  // }
});