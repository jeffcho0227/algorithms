class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarSearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      let current = this.root;
      while(true) {
        if (value === current.value) {
          return undefined;
        }
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.right) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }

  find (value) {
    if (this.root === null) {
      return false;
    }
    let current = this.root,
        found = false;
        while(current && !found) {
          if (value < current.value) {
            current = current.left;
          } else if (value > current.value){
            current = current.right;
          } else {
            found = true;
          }
        }
        if (!found) {
          return undefined;
        }
    return current;
  }

  BFS() {
    let result = [],
        queue = [],
        node = this.root;

    queue.push(node);
    while(queue.length) {
      node = queue.shift();
      result.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return result;
  }

  //DFS PreOrder
  //      10
  //    6   15
  //   3 8    20
  // output => [10, 6, 3, 8, 15, 20]
  DFSPreOrder() {
    let result = [];
    const traverse = (node) => {
      result.push(node.value);
      if (node.left) {
        return traverse(node.left);
      }
      if (node.right) {
        return traverse(node.right);
      }
    }
    traverse(this.root);
    return result;
  }

  //DFS PostOrder
  //      10
  //    6   15
  //   3 8    20
  // output => [3, 8, 6, 20, 15, 10]
  DFSPostOrder() {
    let result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    }
    traverse(this.root);
    return result;
  }

  //DFS InOrder
  //      10
  //    6   15
  //   3 8    20
  // output => [3, 6, 8, 10, 15, 20]
  DFSInOrder() {
    let result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return result;
  }
}


