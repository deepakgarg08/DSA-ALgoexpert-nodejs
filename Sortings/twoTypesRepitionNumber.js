// var array = [3,5,3,5,3,5,3,5,3,5];
var array = [3, 3, 5,3, 3,5, 5, 3, 5, 5, 5, 5, 5, 5];
// var array = [5, 3, 5, 3, 5, 3];
// var array = [5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5];
// var array = [5, 3,5,3];
// var array = [3,5,5,3];
// var array = [64, 34, 25, 12, 22, 11, 90];

function sort(array) {
  console.log("array", array);

let i=0
  for (let j = 1; j < array.length; j++) {
      
    if (array[i] > array[j]) {
     
        [array[i], array[j]] = [array[j], array[i]]

    } else if(array[i] === array[j]){

        [array[i+1], array[j]] = [array[j], array[i+1]]
        i++

    }
  }
 return array 
}

console.log("sort", sort(array));








