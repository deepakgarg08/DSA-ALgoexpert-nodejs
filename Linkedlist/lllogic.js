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
    let newNode = new Node(value);

    //insert in the end/tail
    if(end === true) {
      if (this.head === null) {
        this.head = newNode;
      } else {
        this.insertNode(this.head, newNode);
      }
      this.size++;
      return this.head
    }
    //insertion at head
    if (this.head === null || index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;

      return newNode;
    }

    let i = 0;
    let previous,
      current = this.head;

    while (i < index) {
      i++;
      previous = current;
      current = current.next;
    }

    newNode.next = current;
    previous.next = newNode;

    this.size++;
  }

  //deletion

  delete(value) {
    console.log("value", value);

    if (this.head === null) {
      //nothing to delete
      return null;
    }
    //if only one node
    else if (this.head.next === null) return;
    else {
      let previous = this.head;
      let tail = this.head.next;
      let node = this.deleteNode(previous, tail, value);
      return node;
    }
  }

  deleteNode(previous, tail, value) {
    if (previous.value === value) {
      previous.next = null;
      return;
    } else {
      this.deleteNode(tail.next, value);
    }

    return node;
  }
  //traverse
}

module.exports = LinkedList;
