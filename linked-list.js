// JavaScript ES6 class-based Linked List data structure (singly-linked)
class LinkedList {
  
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  
  size() {
    return this.size;
  }
  
  isEmpty() {
    return this.size === 0;
  }
  
  add(data) {
    try {
      if (this.contains(data) === true) {
        throw new Error('This data already exists in this linked list.');
      }
    }
    catch (err) {
      console.log(err);
    }
    if (this.size === 0) {
      this.addFirst(data);
    } else {
      this.addLast(data);
    }
  }
  
  addFirst(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    if (this.size === 1) this.tail = newNode;
  }
  
  addLast(data) {
    let newNode = new Node(data);
    if (this.size === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  
  peekFirst() {
    if (this.head === null) throw new Error('This linked list is empty!');
    return this.head.data;
  }
  
  peekLast() {
    if (this.head === null) throw new Error('This linked list is empty!');
    return this.tail.data;
  }
  
  removeFirst() {
    if (this.head === null) throw new Error('This linked list is empty!');
    let removedNode = this.head;
    this.head = this.head.next;
    this.size--;
    return removedNode.data;
  }
  
  removeLast() {
    if (this.head === null) throw new Error('This linked list is empty!');
    if (this.head.next === null) {
      let removedNode = this.head;
      this.head = null;
      this.tail = null;
      this.size--;
      return removedNode.data;
    } else {
      let leadPointer = this.head.next;
      let followPointer = this.head;
      let removedNode;
      while (leadPointer.next != null) {
        leadPointer = leadPointer.next;
        followPointer = followPointer.next;
      }
      removedNode = followPointer.next;
      followPointer.next = null;
      this.tail = followPointer;
      this.size--;
      return removedNode.data;
    }
  }
  
  remove(data) {
    let index = this.indexOf(data);
    if (index === -1) throw new Error ('The specified data is not contained within this linked list.');
    this.removeAt(index);
  }
  
  removeAt(index) {
    if (index < 0 || index >= this.size) throw new Error('Invalid index, Out of range.')
    let counter = 0;
    let pointer = this.head;
    while (pointer.next != null) {
      counter++;
      if (counter === index) {
        let removedNode = pointer.next;
        pointer.next = pointer.next.next;
        if (counter === (this.size - 1)) {
          this.tail = pointer;
        }
        this.size--;
        return removedNode.data;
      }
      pointer = pointer.next;
    }
  }
  
  clear() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  
  contains(data) {
    return this.indexOf(data) != -1; 
  }
  
  indexOf(data) {
    if (this.head === null) throw new Error('This linked list is empty!');
    let index = 0;
    let currentNode = this.head;
    if (currentNode.data === data) return index;
    while (currentNode.next != null) {
      currentNode = currentNode.next;
      index++;
      if (currentNode.data === data) return index;
    }
    return -1;
  }
  
  toString() {
    if (this.head === null) throw new Error('This linked list is empty!');
    let outputStr = '';
    let currentNode = this.head;
    outputStr += String(currentNode.data);
    if (currentNode.next != null) outputStr += ', ';
    while (currentNode.next != null) {
      currentNode = currentNode.next; 
      outputStr += String(currentNode.data);
      if (currentNode.next != null) outputStr += ', ';
    }
    return outputStr;
  }
   
}

class Node {
  
  constructor(data) {
    this.data = data;
    this.next = null;
  }
  
  getData() {
    return this.data;
  }
  
  setData(newData) {
    this.data = newData;
  }
  
}
