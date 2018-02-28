var Vespasianus = (function() {
  function Vespasianus() {
    this.subscribers = [];
  }
  Vespasianus.prototype.publish = function() {
    var self = this;
    this.subscribers.every(function(subscriber) {
      subscriber.fire(self);
      return true;
    });
  }
  Vespasianus.prototype.register = function(target) {
    this.subscribers.push(target);
  };
  
  return Vespasianus;
})();

var Mucianus = (function() {
  function Mucianus() {
    this.list = [];
  };
  Mucianus.prototype.subscribe = function(target) {
    this.list.push({ 
      target: target,
      point: 0
    });
    target.register(this);
  };
  Mucianus.prototype.unsubscribe = function(target) {
    this.list.filter(function(person) {
      return person.target !== target;
    });
  };
  Mucianus.prototype.fire = function(target) {
    this.list.some(function(person) {
      console.log(person.target, target, person.target === target);
      if(person.target === target) {
        ++person.point;
        return true;
      }
    });
  };

  return Mucianus;
})();

var vespasianus = new Vespasianus();
var mucianus = new Mucianus();
mucianus.subscribe(vespasianus);
vespasianus.publish();
mucianus.list;