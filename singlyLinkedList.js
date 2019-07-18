/* 
A data structure that contains a head, tail and length property.
Linked Lists consist fo nodes, and each node has a value and a pointer to another node or null
*/

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode; 
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode; 
    }
    this.length++
    return this;
  }

  //removing a node from the end of the list
  pop() {
    if (!this.head) {
      return undefined;
    };
    let current = this.head;
    let newTail = current;
    while(current.next) {
      newTail = current; 
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head === null;
      this.tail === null;
    }
    return current;
  }

  //remove a node from the beginning 
  shift() {
    if (!this.head) {
      return undefined;
    }

    let result = this.head;
    this.head = this.head.next;
    this.length--; 

    if (this.length === 0) {
      this.head === null;
      this.tail === null;
    }
    return result;
  }
  //adding a new node to the beginning of the linked list
  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    //return the whole linked list
    return this;
  }

}

let list = new SinglyLinkedList()

module.exports = list;