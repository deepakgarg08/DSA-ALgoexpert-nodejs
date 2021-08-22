
//linkedlist basics
const DoubleLinkedList = require('./dllLogic');
const util = require("util");

let dll = new DoubleLinkedList();
dll.insert(10);
dll.insert(20);
dll.insert(30);
dll.insert(40);
// dll.insert(50);

// dll.insert( -2222 , 0 );
dll.insert( -1111 , 3);
dll.insert( -222, 3);
// dll.insert( -333 , index =  5, end = true);

dll.delete(-222)
// dll.delete(50)

dll.traverse(40)

// dll.isEmpty()


console.log(util.inspect(dll.head , { showHidden: false, depth: null }));
// console.log(util.inspect(dll , { showHidden: false, depth: null }));
dll.printList()
dll.isEmpty()