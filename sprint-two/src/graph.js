// Instantiate a new graph
var Graph = function() {

  this.storage = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  if (this.storage[node]) {
    return;
  }
  this.storage[node] = [];

};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  if (this.storage[node]) {
    return true;
  }

  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var edgesToRemove = [];

  if (this.storage[node]) {
    // iterate through key value of delete
    for (let value of this.storage[node]) {
      // grab array and turn to new array
      edgesToRemove.push(value);
      // iterate through array value to find keys
      for (let edges of edgesToRemove) {
        // access through the key
        this.storage[edges].splice(this.storage[edges].indexOf(node), 1);
      }
    }
    delete this.storage[node];
  }

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (Object.keys(this.storage).includes(fromNode) && Object.keys(this.storage).includes(toNode)) {
    return true;
  }
  if (this.storage[fromNode].includes(toNode)) {
    return true;
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this.storage[fromNode].push(toNode);
  this.storage[toNode].push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  for (let value of this.storage[fromNode]) {
    if (toNode === value) {
      this.storage[fromNode].splice(this.storage[toNode].indexOf(value), 1);
      this.storage[toNode].splice(this.storage[fromNode].indexOf(value), 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.storage) {
    cb(key);
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


