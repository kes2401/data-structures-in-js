/*
*  A JavaScript ES6 class-based HashTable data structure implementation using
*  linked lists with separate chaining to handle collisions
*/
class HashTable {
  
  loadFactorLimit = 0.75;
  chainLimit = 8;
  
  constructor(initSize=24) {
    this.table = new Array(initSize).fill(null);
    this.hashtableSize = 0;
    this.capacity = initSize;
  }
  
  static hash(key) {
    if (typeof key != 'string') throw new Error('The key should be a string.');
    let hashcode = 0;
    for (let i = 0; i < key.length; i++) {
      hashcode += key.charCodeAt(i) * i;
    }
    return hashcode % 883;
  }
  
  size() {
    return this.hashtableSize;
  }
  
  isEmpty() {
    return this.hashtableSize === 0;
  }
  
  clear() {
    this.table.fill(null);
    this.hashtableSize = 0;
    return 'Hash Table cleared.'
  }
  
  hasKey(key) {
    for (let el of this.table) {
      if (el != null) {
        if (el.contains(key)) return true;
      }
    }
    return false;
  }
  
  insert(key, val) {
    if (typeof key != 'string') throw new Error('The key should be a string.');
    
    if (this.hasKey(key)) throw new Error('This key is already contained within the table. The key must be unique.');
    
    let index = hash(key) % this.capacity;
    if (this.table[index] === null) {
      this.table[index] = new Bucket();
    }
    this.table[index].add(key, val);
    this.hashtableSize++;
    
    if (this.table[index].length >= this.chainLimit) console.log('WARNING - The chain length in this bucket has breached the limit!');
    
    if (!this.isLoadInOrder()) this.resizeTable(); // resize table if load factor is breached
  }

  // helper function used by the table resize method
  insertToTempTable(table, newCapacity, key, val) {
    let index = hash(key) % newCapacity;
    if (table[index] === null) {
      table[index] = new Bucket();
    }
    table[index].add(key, val);
  }

  get(key) {
    let index = hash(key) % this.capacity;
    if (this.table[index] === null) throw new Error('This key was not found in the table.');
    return this.table[index].get(key).value;
  }
  
  remove(key) {
    let index = hash(key) % this.capacity;
    if (this.table[index] === null) throw new Error('This key was not found in the table.');
    this.hashtableSize--;
    return this.table[index].remove(key);
  }
  
  resizeTable() { 
    this.capacity *= 2;
    let newTable = new Array(this.capacity).fill(null); 
    
    for (let i = 0; i < this.table.length; i++) {      
      if (this.table[i] != null) {
        let currentEntry = this.table[i].head;
        this.insertToTempTable(newTable, this.capacity, currentEntry.key, currentEntry.value);
        while (currentEntry.next != null) {
          currentEntry = currentEntry.next;
          this.insertToTempTable(newTable, this.capacity, currentEntry.key, currentEntry.value);
        }
      }
    }    
    this.table = newTable;
  }
  
  isLoadInOrder() {
    return (this.hashtableSize / this.capacity) < this.loadFactorLimit;
  }
  
  keys() {
    let keysArr = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] != null) {
        let currentEntry = this.table[i].head;
        keysArr.push(currentEntry.key);
        while (currentEntry.next != null) {
          currentEntry = currentEntry.next;
          keysArr.push(currentEntry.key);
        }
      }
    }
    return keysArr;
  }
  
  values() {
    let valuesArr = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i] != null) {
        let currentEntry = this.table[i].head;
        valuesArr.push(currentEntry.value);
        while (currentEntry.next != null) {
          currentEntry = currentEntry.next;
          valuesArr.push(currentEntry.value);
        }
      }
    }
    return valuesArr;
  }  
  
}

// Linked list data structure
class Bucket {
  
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  size() {
    return this.length;
  }
  
  isEmpty() {
    return this.length === 0;
  }
  
  add(key, val) {
    let newEntry = new Entry(key, val);
    if (this.length === 0) {
      this.head = newEntry;
      this.tail = newEntry;
    } else {
      this.tail.next = newEntry;
      this.tail = newEntry;
    }
    this.length++;
  }
  
  get(key) {
    let hashcode = HashTable.hash(key);
    if (this.head === null) throw new Error('This bucket is empty!');
    let currentEntry = this.head;
    if (currentEntry.hash === hashcode) return currentEntry;
    while (currentEntry.next != null) {
      currentEntry = currentEntry.next;
      if (currentEntry.hash === hashcode) return currentEntry;
    }
    return new Error('The provided key could not be found in this bucket.')
  }
  
  remove(key) {
    let index = this.indexOf(key);
    if (index === -1) throw new Error ('The specified data is not contained within this bucket.');
    this.removeAt(index);
  }
  
  removeAt(index) {
    if (index < 0 || index >= this.length) throw new Error('Invalid index, Out of range.')
    let counter = 0;
    let pointer = this.head;
    while (pointer.next != null) {
      counter++;
      if (counter === index) {
        let removedEntry = pointer.next;
        pointer.next = pointer.next.next;
        if (counter === (this.length - 1)) {
          this.tail = pointer;
        }
        this.length--;
        return removedEntry;
      }
      pointer = pointer.next;
    }
  }
  
  clear() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  
  contains(key) {
    return this.indexOf(key) != -1; 
  }
  
  indexOf(key) {
    if (this.head === null) throw new Error('This bucket is empty!');
    let index = 0;
    let currentEntry = this.head;
    if (currentEntry.key === key) return index;
    while (currentEntry.next != null) {
      currentEntry = currentEntry.next;
      index++;
      if (currentEntry.key === key) return index;
    }
    return -1;
  }
  
  toString() {
    if (this.head === null) throw new Error('This bucket is empty!');
    let outputStr = '';
    let currentEntry = this.head;
    outputStr += `${currentEntry.key} => ${currentEntry.value}`;
    if (currentEntry.next != null) outputStr += ', ';
    while (currentEntry.next != null) {
      currentEntry = currentEntry.next; 
      outputStr += `${currentEntry.key} => ${currentEntry.value}`;
      if (currentEntry.next != null) outputStr += ', ';
    }
    return outputStr;
  }
   
}

// Hash table entries (i.e., nodes in the linked list)
class Entry {
  
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.hash = HashTable.hash(key);
    this.next = null;    
  }
  
  toString() {
    return `${this.key} => ${this.value}`;
  }
  
}
