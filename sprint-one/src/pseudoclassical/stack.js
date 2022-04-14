var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //Capitalize your function name to indicate to others that it is intended to be run with the keyword new
  // Use the keyword new when instantiating your class
  // Use the keyword this in your constructor
  this.storage = {};
  this.numericKey = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.numericKey] = value;
  this.numericKey++;
};

Stack.prototype.pop = function() {
  if (this.numericKey > 0) {
    this.numericKey--;
  }
  return this.storage[this.numericKey];
  delete this.storage[this.numericKey];
};

Stack.prototype.size = function() {
  return this.numericKey;
};

