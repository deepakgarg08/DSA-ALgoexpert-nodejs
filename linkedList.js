
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

  //insertion at tail
  insert(value) {
    let newNode = new Node(value);
    console.log('Node', newNode)
    console.log('fired::::',this.head);

    //insertion at tail
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

  //deletion

  delete(value){
    console.log('value', value)

    if (this.head === null){
      //nothing to delete
      return null
    }
    //if only one node
    else if(this.head.next === null) return;
    else{
      let previous = this.head;
      let tail = this.head.next;
      let node = this.deleteNode(previous, tail, value)
      return node
    }
    
  }

deleteNode(previous,tail,  value){
  
  if(previous.value === value){
    previous.next = null
    return 
  }
 
  else{
    this.deleteNode(tail.next, value)
  }

  return node

}




  //traverse
}

let ll = new LinkedList();
ll.insert(10);
ll.insert(20);
ll.insert(30);
ll.insert(40);
ll.insert(50);
// ll.delete(50)


// console.log("ll", ll);
console.log(util.inspect(ll, { showHidden: false, depth: null }));