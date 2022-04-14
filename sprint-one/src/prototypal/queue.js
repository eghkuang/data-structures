var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //end = enqueue
  //start = dequque
  // Use Object.create with the object from step 2 to create instances of your class
  var instance = Object.create(methods);
  instance.storage = {};
  instance.end = 0;
  instance.start = 0;

  return instance;
};

var methods = {};

methods.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

methods.dequeue = function() {
  if (this.end > this.start) {
    var item = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return item;
  }
};

methods.size = function() {
  return (this.end - this.start);
};

var queueMethods = {};


