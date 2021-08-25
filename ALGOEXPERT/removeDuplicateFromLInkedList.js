//https://github.com/deepakgarg08/algoexpert-data-structures-algorithms/blob/master/Questions/remove-duplicates-from-linked-list.PNG
// 1 2 3 4 4 5
const LinkedList = require('../FUNDAMENTALS/Linkedlist/lllogic');
const util = require("util");

let ll = new LinkedList();
ll.insert(1);
ll.insert(2);
ll.insert(3);
ll.insert(4);
ll.insert(4);
ll.insert(5);
console.log(util.inspect(ll, { showHidden: false, depth: null }));


const removeDuplicateFromLinkedList = (ll) => {
    // console.log('ll', ll.value)

    let valuesStored = {}
    let ourll = ll
    ll =ll.head

    while(ll){
        valuesStored[ll.value] = ll.value
        // console.log("check ll.value", ll.next.value);
        if(ll.next.value in valuesStored){
            ll.next = ll.next.next
            ourll.size--
            return ourll
        }
        ll = ll.next
    }

    
}

let fr = removeDuplicateFromLinkedList(ll)
// console.log('removeDuplicateFromLinkedList', removeDuplicateFromLinkedList(ll.head))
console.log(util.inspect(fr , { showHidden: false, depth: null }));













