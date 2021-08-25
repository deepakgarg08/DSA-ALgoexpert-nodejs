const LinkedList = require("../FUNDAMENTALS/Linkedlist/lllogic");
const util = require("util");

let ll = new LinkedList();
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
ll.insert(5);
ll.insert(4);
ll.insert(5);
ll.insert(5);
ll.insert(6);
ll.insert(5);
ll.insert(5);
ll.insert(6);
console.log(util.inspect(ll, { showHidden: false, depth: null }));
console.log("...........");

const removeDuplicateFromLinkedListUnsorted = (ll) => {
  let ourll = ll;
  ll = ll.head;
  let linkedListStorage = {}
  while (ll) {

    linkedListStorage[ll.value] = ll.value
    if (!ll.next) {
      return ourll;
    }

    if (ll.next.value in linkedListStorage) {
      ll.next = ll.next.next;
      ourll.size--;
    }     
    else {
      ll = ll.next;
    }

  }
  return ourll;
};

let fr = removeDuplicateFromLinkedListUnsorted(ll);
console.log(util.inspect(fr, { showHidden: false, depth: null }));
