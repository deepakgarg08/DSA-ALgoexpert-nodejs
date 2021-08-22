// var array = [3,5,3,5,3,5,3,5,3,5];
var array = [3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 3, 3, 5, 5, 3, 5, 5, 5, 5, 5, 5];
// var array = [5, 3, 5, 3, 5, 3];
// var array = [5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5];
// var array = [5, 3,5,3];
var array = [10, 10, 10];
var array = [3, 1, 2, 3, 1, 2];
// var array = [64, 34, 25, 12, 22, 11, 90];

function sort(array) {
  console.log("array", array);

  //initialise

  for (let cc = 0; cc < array.length; cc++) {
    let i = array[cc],
      j = array[cc + 1],
      k = array[cc + 2];
    // if (array[i] > array[j]) {
    if (array[cc] > array[cc + 1] && array[cc] > array[cc + 2]) {
      [array[cc], array[cc + 1], array[cc + 2]] = [
        array[cc + 1],
        array[cc + 2],
        array[cc],
      ];
    } else if (array[cc] > array[cc + 1] && array[cc] < array[cc + 2]) {
      [array[cc], array[cc + 1]] = [array[cc + 1], array[cc]];
    } else if (array[cc] < array[cc + 1] && array[cc] > array[cc + 2]) {
      [array[cc], array[cc + 1], array[cc + 2]] = [
        array[cc + 2],
        array[cc],
        array[cc + 1],
      ];
    } else if (array[cc + 1] > array[cc] && array[cc + 1] > array[cc + 2]) {
      [array[cc + 2], array[cc + 1]] = [array[cc + 1], array[cc + 2]];
    } else if (array[cc] === array[cc + 1] && array[cc] < array[cc + 2]) {
      //do nothing
    } else if (array[cc] === array[cc + 1] && array[cc] > array[cc + 2]) {
      [array[cc], array[cc + 2]] = [array[cc + 2], array[cc]];
    } else if (array[cc] === array[cc + 2] && array[cc + 1] > array[cc + 2]) {
      // 10,20,10
      [array[cc + 1], array[cc + 2]] = [array[cc + 2], array[cc + 1]];
    } else if (array[cc] === array[cc + 2] && array[cc + 1] < array[cc + 2]) {
      //10,5,10
      [array[cc], array[cc + 1]] = [array[cc + 1], array[cc]];
    } else {
      //all are equal do nothing
    }
  }
  return array;
}

console.log("sort", sort(array));
