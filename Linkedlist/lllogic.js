class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertNode(node, newNode) {
    //   console.log('node', node)
    if (node.next === null) {
      node.next = newNode;
    } else {
      this.insertNode(node.next, newNode);
    }
  }

  //insert at given index

  insert(value, index = 0, end = false) {
    if (index < 0 || index > this.size)
      return console.log("Please enter a valid index.");

    let newNode = new Node(value);

    //insert in the end/tail
    if (end === true) {
      if (this.head === null) {
        this.head = newNode;
      } else {
        this.insertNode(this.head, newNode);
      }
      this.size++;
      return this.head;
    }
    //insertion at head
    if (this.head === null) {
      console.log("head");
      newNode.next = this.head;
      this.head = newNode;
      this.size++;

      return newNode;
    }

    //insertion according to any index
    let i = 0;
    let previous = this.head;
    let current = this.head;

    while (i < index) {
      i++;
      previous = current;
      current = current.next;
    }

    newNode.next = current;
    previous.next = newNode;

    this.size++;
    return this.head;
  }

  //deletion

  delete(value) {
    console.log("value", value);

    //nothing to delete
    if (this.head === null) {
      console.log('nothing to delete')
      return null;
    }
    //if only one node
    else if (this.head.next === null) {
      
      console.log('.............')
      this.size--
      this.head = null
    }
    else {
      let current = this.head;
      let previous = current;
      let node = this.deleteNode(previous, current, value);
      console.log("node", node);
      return node;
    }
  }

  deleteNode(previous, current, value) {
    console.log("previous", previous);
    if (previous === null) {
      return console.log("nothing to delete");
    }
    //setting header to null
    if (this.size === 1) {
      console.log("...fired");
      previous = null;
    }

    // if (previous.value === value) {
    //   previous.current = null;
    //   return this.head;
    // } else {
    //   this.deleteNode(current.next, value);
    // }

    return this.head;
  }
  //traverse
}

module.exports = LinkedList;
