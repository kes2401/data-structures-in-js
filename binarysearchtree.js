/*
*  A JavaScript ES6 class-based implementation of a Binary Search Tree data structure
*/
class BinarySearchTree {

  constructor() {
    this.root = null;
    this.nodeCount = 0;
  }
  
  size() {
    return this.nodeCount;
  }
  
  isEmpty() {
    return this.nodeCount === 0;
  }
  
  contains(key) {
    return this.find(key) != null;
  }
  
  add(key, value=undefined) {
    if (typeof key != 'number') throw new Error('The key must be of type Number.');
      
    try {
      if (this.contains(key) === true) {
        throw new Error('This key already exists in this binary search tree.');
      }
    }
    catch (err) {
      console.log(err);
      return false;
    }
    
    if (this.root === null) {
      this.root = new Node(key, value);
    } else {
      this.insert(key, value, this.root);
    }
    
    this.nodeCount++;
    return true;
  }
  
  insert(key, value, node) {
    if (node === null) {
      node = new Node(key, value);
      return node;
    } else if (key < node.key) {
      node.left = this.insert(key, value, node.left);
    } else {
      node.right = this.insert(key, value, node.right);
    }
    return node;
  }
  
  remove(key, node=this.root){
    // TODO - implement

    this.nodeCount--;
    return;
  }
  
  find(key, node=this.root) {
    if (node === null || node.key === key) {
      return node;
    } else if (key < node.key) {
      return this.find(key, node.left);
    } else if (key > node.key) {
      return this.find(key, node.right);
    }
    return null;
  }
  
  findMin(node=this.root) {
    while (node.left != null) node = node.left;
    return node.key;
  }
  
  findMax(node=this.root) {
    while (node.right != null) node = node.right;
    return node.key;
  }
  
  value(key) {
    return this.find(key).value;
  }
  
  height(node=this.root) {    
    if (node === null) return 0;
    return Math.max(this.height(node.left), this.height(node.right)) + 1;
  }
  
  traverse(order) {
    if (typeof order != 'string') throw new Error('Order argument must be a string value.');
    
    switch (order) {
      case 'preorder':
        preorder();
        break;
      case 'inorder':
        inorder();
        break;
      case 'postorder':
        postorder();
        break;
      default:
        throw new Error('Invalid traversal option.');
    }
    
    function preorder() {
      // TODO - implement
      
      console.log('pre-order traversal')
      return true; 
    }
    
    function inorder() {
      // TODO - implement
      
      console.log('in-order traversal')
      return true;
    }
    
    function postorder() {
      // TODO - implement
      
      console.log('post-order traversal')
      return true;
    }   
  }
  
}

class Node {
  
  constructor(key, val) {
    this.key = key;
    this.value = val;
    this.left = null;
    this.right = null;
  }
  
  toString() {
    return `${this.key} => ${this.value}`;
  }
  
}
