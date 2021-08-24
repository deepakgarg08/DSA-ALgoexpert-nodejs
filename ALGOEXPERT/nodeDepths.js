// # BRANCH SUMS
// Write a function that takes in a Binary Tree and returns a list of its branch sums ordered from leftmost branch sum to rightmost branch sum. A branch sum is the sum of all values in a Binary Tree branch. A Binary Tree branch is a path of nodes in a tree that starts at the root node and ends at any leaf node.
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

  BranchSums(root) {
    let sum=0;
    this.calculateBranchSums(root, 0,sum);
    return ;
  }

  calculateBranchSums(root,  totalDepth,sum) {
    if (!root) return 0;
    console.log('total', totalDepth)
    sum+=totalDepth
    totalDepth + this.calculateBranchSums(root.left, totalDepth +1 ) +
    totalDepth + this.calculateBranchSums(root.right, totalDepth+1)
  }
}

let BT = new BinaryTree();
BT.root = new Node(1);

BT.root.left = new Node(2);
BT.root.left.left = new Node(4);
BT.root.left.left.left = new Node(8);
BT.root.left.left.right = new Node(9);
BT.root.left.right = new Node(5);

BT.root.right = new Node(3);

BT.root.right.left = new Node(6);
BT.root.right.right = new Node(7);

BT.BranchSums(BT.root);
// console.log(util.inspect(BT.root, { showHidden: false, depth: null }));
console.log(util.inspect(this, { showHidden: false, depth: null }));
