var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //Use _.extend  to copy the methods onto the instance
  //use 't h i s' in methods
  //methods described in an object

  //create storage object
  var instance = {};
  _.extend(instance, methods);

  instance.storage = {};
  instance.end = 0;
  instance.start = 0;

  return instance;
  // extend to copy methods onto the instance

};

//put all the methods into an object
var methods = {};
// enqueue(string) - Add a string to the back of the queue
methods.enqueue = function(value) {
  this.storage[this.start] = value;
  this.start++;
};
// dequeue() - Remove and return the string at the front of the queue
methods.dequeue = function() {
  if (this.start > this.end) {
    var item = this.storage[this.end];
    delete this.storage[this.end];
    this.end++;
    return item;
  }
};
// size() - Return the number of items in the queue
methods.size = function() {
  return this.start - this.end;
};

// var queueMethods = {};


