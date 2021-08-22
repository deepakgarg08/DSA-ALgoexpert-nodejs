// it contains fundamentals of stack

class Stack {
  constructor() {
    this.items = [];
    this.size = 0;
  }

  //insert element

  push(value) {
    this.items.push(value);
    this.size++;
  }

  //remove element

  pop() {
    if (!this.isEmpty()) {
      this.items.pop();
      this.size--;
    } else {
      return console.log("stack is empty");
    }
  }

  //returns top most element but don't delete

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    } else {
      return console.log("stack is empty");
    }
  }

  noOFElements() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }
  //This method returns a string in which all the element of an stack is concatenated.
  printStack() {
    let str = "";
    for (let e of this.items) {
      str += e + " ";
    }
    return str;
  }
}

let stack = new Stack();
stack.push(5);
stack.push(4);
stack.push(3);
stack.push(2);
console.log("stack", stack);
stack.pop();
console.log("stack", stack);
console.log("stack.peek()", stack.peek());
console.log("isEmpty", stack.isEmpty());
console.log("stack.noOFElements()", stack.noOFElements());
console.log("printstack():: ", stack.printStack());
