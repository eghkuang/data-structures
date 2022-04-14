var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var numericKey = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[numericKey] = value;
    numericKey++;
  };

  someInstance.pop = function() {
    if (numericKey > 0) {
      numericKey--;
    }
    return storage[numericKey];
    delete storage[numericKey];
  };

  someInstance.size = function() {
    return numericKey;
  };

  return someInstance;
};