/*
Binary Heap

similar to a binary search tree, but with some different rules
In a MaxBinaryHearp, parent nodes are always larger than child nodes. 
In a MinBinaryHeap, parent nodes are always smaller than child nodes.
takes up the least amount of space compare to Trees

left child is stored at 2n + 1
right child is stored at 2n + 2

child at index n, it's parent is at index (n-1)/2 floored;
*/

class MaxBinaryHeap {
  constructor() {
    this.container = [];
  }

  insert(value) {
    this.container.push(value);
    this.bubbleUp();
  }

  bubbleUp() {
    let idx = this.container.lenth -1;
    const element = this.container[idx];
    while(idx > 0) {
      let parentIdx = Math.floor((idx -1)/2);
      let parent = this.container[parentIdx];
      if (element <= parent) break;
      this.container[parentIdx] = element;
      this.container[idx] = parent;
      idx = parentIdx;
    }
  }
  
  
  //remove the root
  /*
    remove the root and replace it with the value at the end
    then compare the value with the largest children
    the move down until it hits the correct spot
  */
  remove() {
    const max = this.container[0];
    const end = this.container.pop();
    this.container[0] = end;
    this.sinkDown();
    return max;
  }

  sinkDown() {
     let idx = 0;
     const length = this.container.length;
     const element = this.container[0];
     while(true) {
       let leftChildIdx = idx*2+1;
       let rightChildIdx = idx*2+2;
       let leftChild, rightChild;
       let swap = null;

      if (leftChildIdx < length) {
        leftChild = this.container[leftChildIdx];
        if (leftChild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.container[rightChildIdx];
        if (
            (swap === null && rightChild > element) || 
            (swap !== null && rightChild > leftChild)
        ) {
          swap = rightChildIdx;
        }
      }
       if (swap === null) break;
       this.container[idx] = this.container[swap];
       this.container[swap] = element;
       idx = swap;
     }
  }
}

let heap = new MaxBinaryHeap();
