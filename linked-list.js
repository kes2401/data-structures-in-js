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
    if (this.head === null) {
      this.addFirst(data);
    } else {
      this.addLast(data);
    }
  }
  
  addFirst(data) {
    newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  
  addLast(data) {
    newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next != null) {
          currentNode = currentNode.next;
      }
      currentNode.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  
  peekFirst() {
    if (this.head === null) {
      throw new Error('This linked list is empty!');
    } else {
      return this.head.data;
    }
  }
  
  peekLast() {
    if (this.head === null) {
      throw new Error('This linked list is empty!');
    } else {
      return this.tail.data;
    }
  }
  
  removeFirst() {
    if (this.head === null) {
      throw new Error('This linked list is empty!');
    } else {
      this.head = this.head.next;
    }
    this.size--;
  }
  
  removeLast() {
    if (this.head === null) {
      throw new Error('This linked list is empty!');
    } else if (this.head.next === null) {
      this.head = null;
      this.tail = null;
    } else {
      let leadPointer = this.head.next;
      let followPointer = this.head;
      while (leadPointer.next != null) {
        leadPointer = leadPointer.next;
        followPointer = followPointer.next;
      }
      followPointer.next = null;
      this.tail = followPointer;
    }
    this.size--;
  }
  
  remove(data) {
    let index = this.indexOf(data);
    if (index === -1) {
      throw new Error ('The specified data is not contained within this linked list.');
    } else {
      this.removeAt(index);
    }
  }
  
  removeAt(index) {
    if (index < 0 || index >= this.size) throw new Error('Invalid index, Out of range.')
    let counter = 0;
    let pointer = this.head;
    while (pointer.next != null) {
      counter++;
      if (counter === index) {
        pointer.next = pointer.next.next;
        if (counter === (this.size - 1)) {
          this.tail = pointer;
        }
        this.size--;
        return true;
      }
      pointer = pointer.next;
    }
  }
  
  clear() {
    while (this.size > 0) {
      this.removeLast();
    }
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
    if (this.head === null) {
      throw new Error('This linked list is empty!');
    } else {
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
