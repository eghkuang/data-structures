

// var HashTable = function() {
//   this._limit = 8;
//   this._storage = LimitedArray(this._limit);
//   this._count = 0;
// };

// HashTable.prototype.insert = function(k, v) {
//   var index = getIndexBelowMaxForKey(k, this._limit);

//   //retrieve a bucket
//   var bucket = this._storage.get(idx);
//   //if it doesnt exist, create it
//   if (bucket === undefined) {
//     bucket = [];
//     this._storage.set(idx, bucket);
//   }

//   var found = false;
//   //iterate over bucket
//     //if the key exists
//       //update the key
//   for (var i = 0; i < bucket.length; i++) {
//     var tuple = bucket[i];
//     if (tuple[0] === k) {
//       tuple[1] = v;
//       found = true;
//       break;
//     }
//   }

//   // if no key was found
//     //inset a new tuple
//   if (found === undefined) {
//     bucket.push([k, v]);
//     this._count++;
//     if (this._count > this._limit * 0.75) {
//       this._resize(this._limit * 2);
//     }
//   };

// };

// HashTable.prototype.retrieve = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);

//   var bucket = this._storage.get(idx);
//   if (bucket === undefined) {
//     return null;
//   }

//   var found = false;

//   for (var i = 0; i < bucket.length; i++) {
//     var tuple = bucket[i];
//     if (tuple[0] === k) {
//       return tuple[1];
//       break;
//     }

//   return null;
// };

// HashTable.prototype.remove = function(k) {
//   var index = getIndexBelowMaxForKey(k, this._limit);

//   var bucket = this._storage.get(idx);
//   if (bucket === undefined) {
//     return null;
//   }

//   var found = false;

//   for (var i = 0; i < bucket.length; i++) {
//     var tuple = bucket[i];
//     if (tuple[0] === k) {
//       bucket.splice(i, 1);
//       if (this._count < this._limit * 0.25) {
//         this._resize(this._limit / 2);
//       }
//       return tuple[1];
//     }
//   }
//   return null;
// };

// HashTable.prototype.resize = function(k) {
//   var oldStorage = this._storage;
//   this._limit = newLimit;
//   this._storage = makeLimitedArray(newLimit);
//   this._count = 0;

//   var context = this;

//   oldStorage.each(function(bucket) {
//     if (!bucket) {
//       return;
//     }
//     //iterate over old storage
//     for (var i = 0; i < bucket.length; i++) {
//       //re-insert tuples
//       var tuple = bucket[1];
//       this.insert(tuple[0], tuple[1]);
//     }
//   }.bind(this));
// }

/*
 * Complexity: What is the time complexity of the above functions?
 */


//////////////////////////////////////////////////////////////////
// Implementation #1:
// Solution-Lecture implementation
//
// Notice how each function has a similar structure:
//   - calculate an index
//   - retreive an bucket at that location
//   - iterate over the bucket, and
//     - perform an action if the key is found
//   - otherwise perform a not-found action
//////////////////////////////////////////////////////////////////

var HashTable = function() {

  this._size = 0;
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      var oldValue = tuple[1];
      tuple[1] = v;
      return oldValue;
    }
  }

  bucket.push([k, v]);
  this._storage.set(index, bucket);
  this._size++;

  if (this._size > this._limit * 0.75) {
    this._resize(this._limit * 2);
  }

  return undefined;
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }

  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
      this._size--;
      if (this._size < this._limit * 0.25) {
        this._resize(Math.floor(this._limit / 2));
      }
      return tuple[1];
    }
  }

  return undefined;
};


HashTable.prototype._resize = function(newLimit) {
  var oldStorage = this._storage;

  // min size of 8, return if nothing to do!
  newLimit = Math.max(newLimit, 8);
  if (newLimit === this._limit) { return; }

  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  this._size = 0;

  oldStorage.each(function(bucket) {
    if (!bucket) { return; }
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      this.insert(tuple[0], tuple[1]);
    }
  }.bind(this));
};