var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  //Capitalize your function name to indicate to others that it is intended to be run with the keyword new
  // Use the keyword new when instantiating your class
  // Use the keyword this in your constructor

  //end = enqueue, start = dequeue;
  this.storage = {};
  this.end = 0;
  this.start = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.end] = value;
  this.end++;
};

Queue.prototype.dequeue = function() {
  if (this.end > this.start) {
    var item = this.storage[this.start];
    delete this.storage[this.start];
    this.start++;
    return item;
  }
};

Queue.prototype.size = function() {
  return (this.end - this.start);
};

