class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// let newNode = new Node(25);
// console.log("Node", newNode);

//check

class BinarySearchTreeClass {
  constructor() {
    //root of binary search tree
    this.root = null;
  }

  //insert

  insert(data) {
    let newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  //deletion

  remove(data) {
    if (this.root === null) {
      //tree is empty
      return null;
    } else {
      this.removeNode(this.root, data);
    }
  }

  insertNode(node, newNode) {
    if (node.data > newNode.data) {
      //left
      if (node.left === null) {
        node.left = newNode;
      } else this.insertNode(node.left, newNode);
    }
    //right
    else {
      if (node.right === null) {
        node.right = newNode;
      } else this.insertNode(node.right, newNode);
    }
  }

  removeNode(node, data) {
    if (node.data < data) {
      //go to right
      node.right = this.removeNode(node.right, data);
      return node;
    } else if (node.data > data) {
      //go to left
      node.left = this.removeNode(node.left, data);
      return node;
    } else {
      //we are talking here about targetnode
      //if the element has right children only
      //if the element has left children only
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      } else if (node.left === null) {
        node = node.right;
        return node;
      } else {
        node = node.left;
        return node;
      }
    }
  }
}

let BST = new BinarySearchTreeClass();
BST.insert(50);
BST.insert(40)
BST.insert(30)
BST.insert(120)
// BST.insert(10)
// BST.insert(50)
console.log("BST", BST);
