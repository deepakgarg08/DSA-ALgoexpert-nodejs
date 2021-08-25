//https://github.com/deepakgarg08/algoexpert-data-structures-algorithms/blob/master/Questions/remove-duplicates-from-linked-list.PNG
// 1 2 3 4 4 5
const LinkedList = require("../FUNDAMENTALS/Linkedlist/lllogic");
const util = require("util");

let ll = new LinkedList();
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
ll.insert(4);
ll.insert(5);
ll.insert(5);
ll.insert(5);
console.log(util.inspect(ll, { showHidden: false, depth: null }));
console.log("...........");

const removeDuplicateFromLinkedList = (ll) => {

  let ourll = ll;
  ll = ll.head;
  while (ll) {
    if (!ll.next) {
      return ourll;
    }

    if (ll.value === ll.next.value) {
      ll.next = ll.next.next;
      ourll.size--;
    } else {
      ll = ll.next;
    }
  }
  return ourll;
};

let fr = removeDuplicateFromLinkedList(ll);
console.log(util.inspect(fr, { showHidden: false, depth: null }));
