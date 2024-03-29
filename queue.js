// JavaScript ES6 class-based Queue data structure implemented with a linked list
class Queue {
  
  constructor() {
    this.head = null;
    this.tail = null;
    this.queueSize = 0;
  }
    
  size() {
    return this.queueSize;
  }
  
  isEmpty() {
    return this.queueSize === 0;
  }
  
  peek() {
    if (this.head === null) throw new Error('This queue is empty!');
    return this.head.data;
  }
  
  enqueue(data) {
    let newNode = new Node(data);
    if (this.queueSize === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.queueSize++;
  }
  
  dequeue() {
    if (this.head === null) throw new Error('This queue is empty!');
    let removedNode = this.head;
    this.head = this.head.next;
    this.queueSize--;
    if (this.queueSize === 0) this.tail = null;
    return removedNode.data;
  }
  
  contains(data) {
    if (this.head === null) throw new Error('This queue is empty!');
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
