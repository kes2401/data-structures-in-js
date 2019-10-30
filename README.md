# data-structures-in-js
Common data structures implemented in JavaScript.

# _API_

## Contents
1. [Linked List](#linked-list)
2. [Stack](#stack)
3. [Queue](#queue)
4. [Hash Table](#hash-table)
5. [Binary Heap / Priority Queue](#binary-heap)
6. [Binary Search Tree](#binary-search-tree)


## Linked List
A new linked list object can be instantiated using the new operator with the linked list constructor, i.e., `new LinkedList()`.

This class implements a singly-linked list.

_*It is recommended that any data added to the linked list is of a primitive data type, due to the present lack of object equality comparison. This will be updated in the near future to include object equality functionality but in the meantime please stick to primitive data types in order for the linked list to function as expected._

Method Summary:

* `size()` - returns the number of elements in the list.
* `isEmpty()` - returns a boolean based on whether the list contains any elements.
* `add(data)` - inserts the given data element in the next position in the list.
* `addFirst(data)` - inserts the given data element at the beginning of the list.
* `addLast(data)` - inserts the given data element at the end of the list.
* `peekFirst()` - returns the data from the element at the beginning of the list.
* `peekLast()` - returns the data from the element at the end of the list.
* `removeFirst()` - removes the element from the beginning of the list and returns the data from it.
* `removeLast()` - removes the element at the end of the list and returns the data from it.
* `remove(data)` - searches the list for the given data and removes it from the list, returning the data from that element.
* `removeAt(index)` - removes an element from the given index in the list and returns the data from it.
* `clear()` - clears the list so that it no longer contains any data.
* `contains(data)` - returns a boolean based on whether the list contains the given data.
* `indexOf(data)` - returns the index of the given data in the list.
* `toString()` - returns a string representation of the data contained in the list.

[back to top](#contents)

## Stack
A new stack object can be instantiated using the new operator with the stack constructor, i.e., `new Stack()`.

This stack class is implemented using a linked list.

_*It is recommended that any data added to the stack is of a primitive data type, due to the present lack of object equality comparison. This will be updated in the near future to include object equality functionality but in the meantime please stick to primitive data types in order for this data structure to function as expected._

Method Summary:

* `size()` - returns the number of elements in the stack.
* `isEmpty()` - returns a boolean based on whether the stack contains any elements.
* `peek()` - returns the data from the element at the top of the stack.
* `push(data)` - adds a new data element to the top of the stack.
* `pop()` - removes the next element from the top of the stack and returns the data from it.
* `contains(data)` - returns a boolean based on whether the given data is contained within the stack.  

[back to top](#contents)

## Queue
A new queue object can be instantiated using the new operator with the queue constructor, i.e., `new Queue()`.

This queue class is implemented using a linked list.

_*It is recommended that any data added to the queue is of a primitive data type, due to the present lack of object equality comparison. This will be updated in the near future to include object equality functionality but in the meantime please stick to primitive data types in order for this data structure to function as expected._

Method Summary:

* `size()` - returns the number of elements in the queue.
* `isEmpty()` - returns a boolean based on whether the queue contains any elements.
* `peek()` - returns the data from the element at the front of the queue.
* `enqueue(data)` - adds a new data element to the back of the queue.
* `dequeue()` - removes the element from the front of the queue and returns the data from it.
* `contains(data)` - returns a boolean based on whether the given data is contained within the queue. 

[back to top](#contents)

## Hash Table
A new hash table object can be instantiated using the new operator with the hash table constructor, i.e., `new HashTable()`.

This class implements a hash table that maps keys to values, where keys are required to be unique string values.

The initial capacity of the hash table, i.e., the number of elements in the underlying array, is by default 24. However, you can specify an initial capacity by passing an optional number argument into the constructor, for example `new HashTable(48)`, which will create a new hash table with an initial capacity of 48.

This hash table uses separate chaining to handle hash collisions, implemented with linked lists at each non-null element of the underlying array.

The hash table will automatically re-size if the load factor (the current size divided by the current capacity) breaches 0.75, re-sizing exponentially by doubling the capacity of the underlying array.

Method Summary:

* `size()` - returns the number of keys in the hash table.
* `isEmpty()` - returns a boolean value based on whether the hash table has no key-value pairs.
* `clear()` - clears the hash table so it no longer contains any key-value pairs.
* `hasKey(key)` - returns a boolean value based on whether the given key is contained within the hash table.
* `insert(key, value)` - insert a new key-value pair into the hash table, where `key` must be a unique string and `value` can be any value.
* `get(key)` - returns the value mapped to the given key.
* `remove(key)` - removes the given key and its corresponding value from the hash table.
* `keys()` - returns an array containing all keys contained in the hash table.
* `values()` - returns an array containing all values contained in the hash table.

[back to top](#contents)

## Binary Heap

A new binary heap object can be instantiated using the new operator with the queue constructor, i.e., `new BinaryHeap()`.

This may data structure also be used for a Priority Queue implementation.

By default the Binary Heap is created as a Min Heap, however you can create a Max Heap by optionally passing in the string `'max'` to the constructor, i.e., `new BinaryHeap('max')`.

_*This binary heap is designed only to work with single primitive values, and not objects. Values must be comparable. It is recommended that any data elements added to the heap are of type `Number`. Strings could be used instead, but please be aware of the basic rules for string comparison in JavaScript which uses Unicode values. You can read more about this [here](https://javascript.info/comparison#string-comparison). Mixing these types would not be recommended. Further functionality may be added in the future._

Method Summary:

* `size()` - returns the number of elements in the heap.
* `isEmpty()` - returns a boolean based on whether the heap has no elements.
* `clear()` - clears the binary heap so that it no longer contains any elements.
* `insert(value)` - insert a new value into the binary heap, where `value` should be of comparable primitive type (also, see notes above).
* `contains(value)` - returns a boolean based on whether the given value is contained in the heap.
* `buildHeap(array)` - builds a new heap containing the elements contained within the array passed in.
* `extract()` - removes and returns the element from the top of the heap (the front of the Priority Queue).
* `extractAt(index)` - removes and returns the element contained at the given index.
* `peek()` - returns the element from the top of the heap (the front of the Priority Queue), without removing it.
* `get(index)` - returns the data contained at the given index, without removing it.
* `toString()` - returns a string representation of all elements contained in the heap.
* `isMinHeap([root])` - function provided for testing that the heap satisfies the heap invariant for a valid Min Heap. The `root` argument is optional and allows you to enter a starting index for the test, defaulting to `0` if no argument is provided.
* `isMaxHeap([root])` - function provided for testing that the heap satisfies the heap invariant for a valid Max Heap. The `root` argument is optional and allows you to enter a starting index for the test, defaulting to `0` if no argument is provided.

[back to top](#contents)

## Binary Search Tree

A new binary search tree object can be instantiated using the new operator with the BST constructor, i.e., `new BinarySearchTree()`.

New nodes are added to the tree in key-value pairs where the key must be a unique value of type Number.

_*This BST implementation is not yet finished as the removal method and the pre-order, in-order and post-order traversal methods still require completing the implementation*_

* `size()` - returns the number of nodes in the tree.
* `isEmpty()` - returns a boolean based on whether the tree has no elements.
* `contains(key)` - returns a boolean based on whether the given key is contained within the tree, where the key should be a Number.
* `add(key, value)` - inserts a new node into the tree, where key is a Number and value can be of any type.
* `remove(key)` - removes the node with given key from the tree, if it exists. [_*To be implemented*_]
* `find(key)` - finds a node with the matching key and returns it if it exists, otherwise returns `null`.
* `findMin()` - finds and returns the lowest value key for any node in the tree.
* `findMax()` - finds and returns the highest value key for any node in the tree.
* `value(key)` - finds and returns the value of the node for the matching key, or otherwise `null` if it does not exist.
* `height()` - returns the height of the tree.
* `traverse(order)` - calls the selected order traversal method, where options are `preorder`, `inorder` or `postorder`.
* `preorder()` - prints a Pre-Order traversal of the tree. [_*To be implemented*_]
* `inorder()` - prints an In-Order traversal of the tree. [_*To be implemented*_]
* `postorder()` - prints a Post-Order traversal of the tree. [_*To be implemented*_]

[back to top](#contents)
