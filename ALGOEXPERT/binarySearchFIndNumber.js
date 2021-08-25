//https://github.com/deepakgarg08/algoexpert-data-structures-algorithms/blob/master/Questions/binary-search.PNG

let array = [0, 1, 21, 33, 45,  61, 71, 72, 74];
let target = 33;
let middle = 0;
let newArray = [];
let result;
function binarySearchFindNumber(array, target) {
  middle = parseInt(array.length / 2);
  let middleNumber1 = array[middle];
  let middleNumber2 = array[middle + 1];

  if (middle < 1) {
    if (target === array[0]) {
      return true;
    } else return -1;
  }
  if (target === middleNumber1 || target === middleNumber2) {
    return true;
  }
  if (target > middleNumber1) {
    //consider values right to middlenumber
    newArray = array.splice(middle, array.length);
    result = binarySearchFindNumber(newArray, target);
    return result;
  } else {
    //consider values left to middlenumber
    newArray = array.splice(0, middle);
    result = binarySearchFindNumber(newArray, target);
    return result;
  }
}

console.log("binarySearchFindNumber:: ", binarySearchFindNumber(array, target));
