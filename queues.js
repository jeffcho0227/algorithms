import { thisExpression } from "@babel/types";

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size;
  }

  //adding to the end of the list
  enqueue(val) {
    let newNode = new Node (val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  //removing from the front and shifting everthing 
  dequeue() {
    if (!this.first) {
      return null;
    } else {
      let temp = this.first;

      if (this.first === this.last) {
        this.last = null;
      }

      this.first = this.first.next;
      this.size--;
      return temp.val;
    }
  }
}