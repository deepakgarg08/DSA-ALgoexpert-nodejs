const util = require("util");

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

   //deletion

   remove(data) {
    if (this.root === null) {
      //tree is empty
      return null;
    } else {
      this.removeNode(this.root, data);
    }
  }

  removeNode(node, data) {
    console.log("node", node);
    if (node === null) return null;
    else if (node.data < data) {
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
      } else if (node.right === null) {
        node = node.left;
        return node;
      }
      // Deleting node with two children
      // minumum node of the rigt subtree
      // is stored in aux
      var aux = this.findMinNode(node.right);
      node.data = aux.data;

      node.right = this.removeNode(node.right, aux.data);
      return node;
    }
  }
  findMinNode(node) {
    // if left of a node is null
    // then it must be minimum node
    if (node.left === null) return node;
    else return this.findMinNode(node.left);
  }
}

let BST = new BinarySearchTreeClass();
// BST.insert(50);
// BST.insert(40)
// BST.insert(30)
// BST.insert(120)
// BST.insert(10)
// BST.insert(50)

BST.insert(10);
BST.insert(5);
BST.insert(15);
BST.insert(2);
BST.insert(5);
BST.insert(13);
BST.insert(22);
BST.insert(1);
BST.insert(14);
// BST.insert(27);
// BST.remove(27);
// BST.remove(5);
// BST.remove(10);
// BST.remove(10);
// console.log("BST", BST);
console.log(util.inspect(BST.root, { showHidden: false, depth: null }));
