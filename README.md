# data-structures-in-js
Common data structures implemented in JavaScript.

# _API_

## Contents
1. [Linked List](#linked-list)
2. [Stack](#stack)
3. [Queue](#queue)
4. [Hash Table](#hash-table)
5. TBC


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
* `keys()` - returns an array containing all keys contained in the hash table
* `values()` - returns an array containing all values contained in the hash table

[back to top](#contents)

...
