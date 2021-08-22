//fundamentals of queue
//uses FIFO order
//enqueue, dequeue, two pointers

class Queue {
  
  constructor() {
    this.items = [];
    this.size = 0;
  }

  //insert
  enqueue(value) {
    this.items.push(value);
    this.size++;
  }

  //delete
  dequeue() {
    this.items.shift();
    this.size--;
  }

  //return first element
  front() {
    return this.items[0];
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

let q = new Queue();
q.enqueue(5);
q.enqueue(4);
q.enqueue(3);
q.enqueue(2);
q.enqueue(1);
console.log("insert: ", q);

q.dequeue();
console.log("remove: ", q);

console.log("front", q.front());
console.log("isEMpty: ",q.isEmpty());
console.log("printstack():: ", q.printStack());
