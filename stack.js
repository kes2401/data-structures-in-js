// JavaScript ES6 class-based Stack data structure implemented with a linked list
class Stack {
  
  constructor() {
    this.head = null;
    this.size = 0;
  }
    
  size() {
    return this.size;
  }
  
  isEmpty() {
    return this.size === 0;
  }
  
  peek() {
    if (this.head === null) throw new Error('This stack is empty!');
    return this.head.data;
  }
  
  push(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }
  
  pop() {
    if (this.head === null) throw new Error('This stack is empty!');
    let removedNode = this.head;
    this.head = this.head.next;
    this.size--;
    return removedNode.data;
  }
  
  contains(data) {
    if (this.head === null) throw new Error('This stack is empty!');
    let currentNode = this.head;
    if (currentNode.data === data) return true;
    while (currentNode.next != null) {
      currentNode = currentNode.next;  
      if (currentNode.data === data) return true;
    }
    return false;    
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
