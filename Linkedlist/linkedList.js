
//linkedlist basics
const LinkedList = require('./lllogic');
const util = require("util");

let ll = new LinkedList();
ll.insert(10);
ll.insert(20);
ll.insert(30);
ll.insert(40);
ll.insert(50);

ll.insert( -111, 0 );
ll.insert( -222, 3);
ll.insert( -333 , index =  5, end = true);

// console.log("ll", ll);
console.log(util.inspect(ll, { showHidden: false, depth: null }));