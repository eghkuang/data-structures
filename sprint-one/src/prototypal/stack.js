var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.


  //end = enqueue
  //start = dequque
  // Use Object.create with the object from step 2 to create instances of your class
  //still use 't h i s'
  var instance = Object.create(methods);
  instance.storage = {};
  instance.numericKey = 0;

  return instance;
};


var methods = {};

methods.push = function(value) {
  this.storage[this.numericKey] = value;
  this.numericKey++;
};

methods.pop = function() {
  if (this.numericKey > 0) {
    this.numericKey--;
  }
  return this.storage[this.numericKey];
  delete this.storage[this.numericKey];
};

methods.size = function() {
  return this.numericKey;
};

// var methods = {
//   push: function(value) {
//     this.storage[this.numericKey] = value;
//     this.numericKey++;
//   },

//   pop: function() {
//     if (this.numericKey > 0) {
//       this.numericKey--;
//     }
//     return this.storage[this.numericKey];
//     delete this.storage[this.numericKey];
//   },

//   size: function() {
//     return this.numericKey;
//   }
// };


var stackMethods = {};


