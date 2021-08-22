//o(n) run time
//binary tree is normal tree, bst is tree where values are compared with root
//traversal
//      1
//   2     3
// 4  5
//inorder ... left root right 4 2 5 1 3
//preorder... root left right 1 2 4 5 3
//postorder... left right root 4 5 2 3 1

//inorder

const util = require("util");
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    new Node(data);
  }

  inorder(node) {
    if (!node) {
      return; //console.log('node is empty')
    }

    this.inorder(node.left);
    console.log("Inorder : ", node.data);
    this.inorder(node.right);
  }

  preorder(node) {
    if (!node) {
      return; //console.log('node is empty')
    }

    console.log("Preorder : ", node.data);
    this.preorder(node.left);
    this.preorder(node.right);
  }

  postorder(node) {
    if (!node) {
      return; //console.log('node is empty')
    }

    this.postorder(node.left);
    this.postorder(node.right);
    console.log("Postorder : ", node.data);
  }
}

let BT = new BinaryTree();
BT.root = new Node(1);
BT.root.left = new Node(2);
BT.root.right = new Node(3);
BT.root.left.left = new Node(4);
BT.root.left.right = new Node(5);

console.log("...................");

BT.inorder(BT.root);
console.log("...................");
BT.preorder(BT.root);
console.log("...................");

BT.postorder(BT.root);
console.log("...................");

// console.log("BT", BT);
console.log(util.inspect(BT, { showHidden: false, depth: null }));
