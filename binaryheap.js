/*
*  A JavaScript ES6 class-based Binary Heap/Priority Queue data structure
* implementation
*/
class BinaryHeap {
  
  constructor(type='min') {
    this.type = type;
    this.heapSize = 0;
    this.items = [];
  }
  
  leftChildIndex(parentIndex) { return 2 * parentIndex + 1; }
  rightChildIndex(parentIndex) { return 2 * parentIndex + 2; }
  parentIndex(childIndex) { return Math.floor((childIndex - 1) / 2); }
  
  hasLeftChild(index) { return this.leftChildIndex(index) < this.heapSize; }
  hasRightChild(index) { return this.rightChildIndex(index) < this.heapSize; }
  hasParent(index) { return this.parentIndex(index) >= 0; }
  
  leftChild(index) { return this.items[this.leftChildIndex(index)]; }
  rightChild(index) { return this.items[this.rightChildIndex(index)]; }
  parent(index) { return this.items[this.parentIndex(index)]; }
  
  isEmpty() {
    return this.heapSize === 0;
  }
  
  clear() {
    this.items = [];
    this.heapSize = 0;
  }
  
  size() {
    return this.heapSize;
  }
  
  contains(item) {
    for (let i = 0; i < this.heapSize; i++) {
      if (this.get(i) === item) return true;
    }
    return false;
  }
  
  buildHeap(array) {
    this.items = [];
    this.heapSize = 0;
    for (let el of array) this.insert(el);
  }
  
  insert(item) {
    if (typeof item != 'number') throw new Error('Heap items must be of type Number.')
    this.items[this.heapSize] = item;
    this.heapSize++;
    this.heapifyUp(this.heapSize - 1);
  }
  
  extract() {
    return this.extractAt(0);
  }
  
  extractAt(index) {
    if (this.heapSize === 0) return null;
    let elementToRemove = this.items[index];
    this.swap(index, this.heapSize - 1);
    this.items.pop();
    
    this.heapSize--;
    this.heapifyDown(index);
  }
  
  // test if element at indexA is greater than the element at indexB
  greater(indexA, indexB) {
    let elementA = this.get(indexA);
    let elementB = this.get(indexB);
    return elementA > elementB;
  }
  
  // test if element at indexA is less than the element at indexB
  less(indexA, indexB) {
    let elementA = this.get(indexA);
    let elementB = this.get(indexB);    
    
    return elementA < elementB; 
  }
  
  swap(indexA, indexB) {
    let elementA = this.get(indexA);
    let elementB = this.get(indexB);
    this.items[indexA] = elementB;
    this.items[indexB] = elementA;
  }
  
  heapifyUp(startIndex=this.heapSize-1) {
    let childIndex = startIndex; 
    if (this.type === 'max') {
      while (this.hasParent(childIndex) && this.less(this.parentIndex(childIndex), childIndex)) {
        this.swap(this.parentIndex(childIndex), childIndex);
        childIndex = this.parentIndex(childIndex);
      }
    } else {
      while (this.hasParent(childIndex) && this.greater(this.parentIndex(childIndex), childIndex)) {
        this.swap(this.parentIndex(childIndex), childIndex);
        childIndex = this.parentIndex(childIndex);
      }
    }
  }
  
  heapifyDown(startIndex=0) {
    let parentIndex = startIndex;
    
    if (this.type === 'max') {
      while (this.hasLeftChild(parentIndex)) {
        let largerChildIndex = this.leftChildIndex(parentIndex);
        if (this.hasRightChild(parentIndex) && this.greater(this.rightChildIndex(parentIndex), this.leftChildIndex(parentIndex))) {
          largerChildIndex = this.rightChildIndex(parentIndex);
        } 
        
        if (this.less(parentIndex, largerChildIndex)) {
          this.swap(parentIndex, largerChildIndex);
        } else {
          break;
        }
        
        parentIndex = largerChildIndex;
      }
    } else {
      while (this.hasLeftChild(parentIndex)) {
        let smallerChildIndex = this.leftChildIndex(parentIndex);        
        
        if (this.hasRightChild(parentIndex) && this.less(this.rightChildIndex(parentIndex), this.leftChildIndex(parentIndex))) {
          smallerChildIndex = this.rightChildIndex(parentIndex);
        }
        
        if (this.greater(parentIndex, smallerChildIndex)) {
          this.swap(parentIndex, smallerChildIndex);
        } else {
          break;
        }
        
        parentIndex = smallerChildIndex;
      }
    }
  }
  
  peek() {
    if (this.isEmpty()) return null;
    return this.get(0);
  }
  
  get(index) {
    return this.items[index];
  }
  
  // testing function to recurse through the heap and confirm if the max heap invariant is satisfied
  isMaxHeap(root=0) {
    if (root < 0 || root > this.heapSize) throw new Error('This is not a valid starting index.');
    
    if (!this.hasLeftChild(root)) return true;
    
    if (this.hasLeftChild(root) && this.greater(this.leftChildIndex(root), root)) return false;
    if (this.hasRightChild(root) && this.greater(this.rightChildIndex(root), root)) return false;
    
    return this.isMaxHeap(this.leftChildIndex(root)) && this.isMaxHeap(this.rightChildIndex(root));
  }
  
  // testing function to recurse through the heap and confirm if the min heap invariant is satisfied
  isMinHeap(root=0) {
    if (root < 0 || root > this.heapSize) throw new Error('This is not a valid starting index.');
    
    if (!this.hasLeftChild(root)) return true;
    
    if (this.hasLeftChild(root) && this.less(this.leftChildIndex(root), root)) return false;
    if (this.hasRightChild(root) && this.less(this.rightChildIndex(root), root)) return false;
    
    return this.isMinHeap(this.leftChildIndex(root)) && this.isMinHeap(this.rightChildIndex(root));
  }
  
  toString() {
    let outputStr = '';
    for (let i = 0; i < this.items.length; i++) {
      outputStr += `${this.items[i]}`;
      if (i < this.items.length - 1) outputStr += ', ';
    }
    return outputStr;
  }
  
}
