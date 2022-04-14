var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //Use _.extend  to copy the methods onto the instance
  //use 't h i s' in methods
  //methods described in an object

  //create storage object
  var instance = {};

  // extend to copy methods onto the instance
  _.extend(instance, methods);

  instance.storage = {};
  instance.numericKey = 0;

  return instance;
};

//put all the methods into an object
var methods = {};
// Add a string to the back of the queue
methods.push = function(value) {
  this.storage[this.numericKey] = value;
  this.numericKey++;
};
// Remove and return the string at the front of the queue
methods.pop = function() {
  if (this.numericKey > 0) {
    this.numericKey--;
  }
  return this.storage[this.numericKey];
  delete this.storage[this.numericKey];
};
// Return the number of items in the queue
methods.size = function() {
  return this.numericKey;
};
var stackMethods = {};


