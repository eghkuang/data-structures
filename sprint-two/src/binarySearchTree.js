var BinarySearchTree = function(value) {
  var binaryTree = Object.create(binaryMethods);

  binaryTree.value = value;
  binaryTree.left = null;
  binaryTree.right = null;

  _.extend(binaryTree, binaryMethods);

  return binaryTree;
};

var binaryMethods = {};

binaryMethods.insert = function(val) {
  //starting value is already 5 binaryTree.value
  if (this.value < val) {
    if (this.right === null) {
      this.right = BinarySearchTree(val);
    } else {
      this.right.insert(val);
    }
  } else if (this.value > val) {
    if (this.left === null) {
      this.left = BinarySearchTree(val);
    } else {
      this.left.insert(val);
    }
  }

/*
  if insert is greater than the binaryTree.value
  and if the right side is null
      new value is right side
  else if right is taken
      recurse, with current right as the current value

else if insert is less than the current val
  and if left side is null
      new value is left side
  else if left is taken
      recurse, with current left as the current value
*/
};

binaryMethods.contains = function(target) {
  if (this.value === target) {
    return true;
  }
  if (target > this.value) {
    return !!(this.right && this.right.contains(target));
  } else if (target < this.value) {
    return !!(this. left && this.left.contains(target));
  }

  return false;
};


//Accepts a callback and executes it on every value contained in the tree.
binaryMethods.depthFirstLog = function(callBack) {
  callBack(this.value);
  if (this.left) {
    this.left.depthFirstLog(callBack);
  }
  if (this.right) {
    this.right.depthFirstLog(callBack);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// i - number
// o - one root from first placement, other placements are in the tree with correct position
// c -
// e - need to check if input is larger or smaller than root/current node to compare
//     need to check if there is a left or right child node defined
//     need to check if th


// // Inserting nodes to the BinarySearchTree
// BST.insert(15);
// BST.insert(25);
// BST.insert(10);
// BST.insert(7);
// BST.insert(22);
// BST.insert(17);
// BST.insert(13);
// BST.insert(5);
// BST.insert(9);
// BST.insert(27);

// //          15
// //         /  \
// //        10   25
// //       / \   / \
// //      7  13 22  27
// //     / \    /
// //    5   9  17

// var root = BST.getRootNode();

// // prints [5 7 9 10 13 (15) 17 22 25 27]
// BST.inorder(root);

