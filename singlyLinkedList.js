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
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }

    this.length++;
    //return the whole linked list
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) {
      return null;
    };
    let counter = 0;
    let current = this.head;
    while(counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  //changing the value of a node based on it's position in the linked list
  set(index, val) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) {
      return false;
    }

    if (index === this.length) {
      return this.push(val);
    }

    if(index === 0) {
      return this.unshift(val);
    }
    let newNode = new Node(val);
    let prev = this.get(index -1);
    let temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if(index < 0 || index >= this.length) return undefined;
    if(index === 0) return this.shift();
    if(index === this.length -1) return this.pop();
    let previousNode = this.get(index -1);
      let removed = previousNode.next;
      return removed; 
  }

  //inplace!!
  reverse() {
    let node = this.head;
    this.head = this.tail; 
    this.tail = nbode;
    let next;
    let prev = null;
    for(let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node; 
      node = next;
    }

    return this;
  }
}

let list = new SinglyLinkedList()

module.exports = list;