
//linkedlist basics

const util = require("util");

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    let newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      this.insertNode(this.head, newNode);
    }
  }

  insertNode(node, newNode) {
      
    //   console.log('node', node)
    if (node.next === null) {
        node.next = newNode
    }
    else{
        this.insertNode(node.next, newNode)
    }
  }

  //insertion
  //deletion
  //traverse
}

let ll = new LinkedList();
ll.insert(10);
ll.insert(20);
ll.insert(20);
ll.insert(30);
ll.insert(40);
ll.insert(50);

// console.log("ll", ll);
console.log(util.inspect(ll, { showHidden: false, depth: null }));