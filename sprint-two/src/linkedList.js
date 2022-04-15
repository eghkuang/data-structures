var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // iterate through the linked list if the
    // next step is null then we add current point
    var newNode = new Node(value);

    //if statement to check if list.head is valid
    if (list.head === null) {
      list.head = newNode;
      list.tail = newNode;
    } else {
      var last = list.head;
      while (last.next !== null) {
        last = last.next;
      }
      last.next = newNode;
      list.tail = newNode;
    }
    //iterate through nodes


  };

  list.removeHead = function() {
    // if this.head is true remove and assign next to node
    if (!list.head) {
      return;
    }
    var oldHead = list.head.value;
    list.head = list.head.next;
    return oldHead;
  };

  list.contains = function(target) {
    // while loop
    if (!list.head) {
      return;
    }
    var first = list.head;
    while (first !== null) {
      if (first.value === target) {
        return true;
      }
      first = first.next;
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// .head property, a linkedListNode instance
// .tail property, a linkedListNode instance
// .addToTail() method, takes a value and adds it to the end of the list
// .removeHead() method, removes the first node from the list and returns its value
// .contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
// What is the time complexity of the above functions?