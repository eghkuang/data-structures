var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // push value to children
  // if array has a value add a nested array inside with another value
  var result = new Tree(value);
  this.children.push(result);
};

treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  }

  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;
};


// A tree class, in functional with shared methods style, with the following properties:

//  .children property, an array containing a number of subtrees

//  .addChild() method, takes any value, sets that as the target of a node, and adds that node as a child of the tree

//  A .contains() method, takes any input and returns a boolean reflecting whether it can be found as the value of the target node or any descendant node


/*
 * Complexity: What is the time complexity of the above functions?
 */

