var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var enqueue = 0;
  var dequeue = 0;

  //FIFO - first element added to queue = first one to be removed

  // Implement the methods below

  someInstance.enqueue = function(value) {
    // Add a string to the back of the queue
    storage[enqueue] = value;
    enqueue++;
  };

  someInstance.dequeue = function() {
    // Remove and return the string at the front of the queue
    // debugger;

    if (enqueue - dequeue) {
      // debugger;
      var item = storage[dequeue];
      delete storage[dequeue];
      dequeue++;
      return item;
    }
  };

  someInstance.size = function() {
    // Return the number of items in the queue
    return enqueue - dequeue;

  };

  return someInstance;
};
