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

  insert(value, index) {
    let newNode = new Node(value);
    let isIndexPresent = index >= 0 ? true : false;
    //insert in the end/tail
    // index = 5
    if (!isIndexPresent) {
      if (this.head === null) {
        this.head = newNode;
      } else {
        this.insertNode(this.head, newNode);
      }
      this.size++;
      return this.head;
    }
    //insertion at head
    else if (this.head === null || index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.size++;

      return newNode;
    }

    //insertion according to any index

    console.log("index", index);
    if (index < 0 || index > this.size)
      return console.log("Please enter a valid index.");
    let i = 0;
    let previous = this.head;
    let current = this.head;
    while (i < index) {
      i++;
      previous = current;
      current = current.next;
    }

    if (i === 0) {
      newNode.next = current;
      this.head = newNode;
    } else {
      newNode.next = current;
      previous.next = newNode;
    }

    this.size++;
    return this.head;
  }

  //deletion

  delete(value) {
    //nothing to delete
    if (this.head === null) {
      console.log("nothing to delete");
      return null;
    }
    //if only one node
    else if (this.head.next === null) {
      this.head = null;
      this.size--;
    } else {
      let current = this.head;
      let previous = null;
      let flag = 0;
      while (current !== null) {
        if (current.value === value) {
          if (previous === null) {
            this.head = current.next;
          } else {
            previous.next = current.next;
          }
          this.size--;
          flag++;
        }
        previous = current;
        current = current.next;
      }
      if (flag === 0) return console.log("value not found");
    }
  }
  //traverse or find an elemenet in link list

  traverse(value) {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      if (current.value === value) {
        return console.log("index of element " + value + " :", count);
      }
      count++;
      current = current.next;
    }
    return console.log("value not found");
  }

  isEmpty() {
    return console.log("list empty check:: ", this.size === 0);
  }
  // gives the size of the list
  size_of_list() {
    console.log(this.size);
  }

  // prints the list items
  printList() {
    let result = []
     while(this.head != null){
      result.push(this.head.value)
      this.head = this.head.next
    }
    console.log('result', result)
  }



}

module.exports = LinkedList;

















