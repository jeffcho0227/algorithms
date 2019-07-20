class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  //adding new node to be the first node with constant time
  push(val) {
    let newNode = new Node(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      let temp = this.first;
      this.first = newNode;
      this.first.next = temp;
    }
    return ++this.size;
  }

  //removing from the beginning;
  pop() {
    if (!this.first) {
      return null;
    } 
    let temp = this.first;
    if (this.fist === this.last) {
      this.last = null;
    }
    this.first = this.frist.next;
    this.size--;
    return temp.val;
  }
}