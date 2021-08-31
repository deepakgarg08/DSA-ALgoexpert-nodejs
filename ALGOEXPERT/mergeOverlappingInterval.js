// var array = [
//   [5, 7],
//   [1, 3],
//   [6, 8],
//   [7, 9],
//   [2, 4],
//   [13, 17],
//   [12, 14],
//   [15, 19],
// ];

var array = [
  [1, 2],
  [3, 5],
  [4, 7],
  [6, 8],
  [9, 10],
];

//method3

let merge = (array3) => {
  array3.sort((a, b) => a[0] - b[0]);

  let mergedIntervals = [array3[0]];
  let j = 0;
  for (let i = 1; i < array.length; ) {
    if (array3[i][0] <= mergedIntervals[j][1]) {
      mergedIntervals[j][1] = Math.max(array3[i][1], mergedIntervals[j][1]);
      i++;
    } else {
      mergedIntervals.push(array3[i]);

      i++;
      j++;
    }
  }
  return mergedIntervals;
};
console.log("merge", merge(array));

//optimised method 1 //doesn't work showing wrong result

function mergetOverlappingINterval2(array) {
  array.sort((a, b) => a[0] - b[0]);

  let result = [];
  for (let i = 1; i < array.length; i++) {
    if (array[i][0] < array[i - 1][1] && i != array.length - 1) {
      let min = Math.min(array[i][0], array[i - 1][0]);
      let max = Math.max(array[i][1], array[i - 1][1]);
      if (max === array[i][1] && min === array[i - 1][0]) {
        result.push([min, max]);
      }
    } else if (i === array.length - 1) {
      console.log("..s");
      result.push(array[i]);
    } else {
      result.push(array[i - 1]);
    }
  }
  console.log("result", result);
  array = [];
  for (let i = 1; i < result.length; i++) {
    if (result[i][0] < result[i - 1][1]) {
      let min = Math.min(result[i][0], result[i - 1][0]);
      let max = Math.max(result[i][1], result[i - 1][1]);
      if (max === result[i][1] && min === result[i - 1][0])
        array.push([min, max]);
    } else if (i === result.length - 1) {
      console.log("..s");
      array.push(array[i]);
    } else {
      array.push(result[i - 1]);
    }
  }
  return array;
}
console.log("mergetOverlappingINterval2::", mergetOverlappingINterval2(array));

var array2 = [
  [1, 2],
  [3, 5],
  [4, 7],
  [6, 8],
  [9, 10],
];

//method 2, which I tried first
function mergetOverlappingINterval(array2) {
  //if array is sorted given, then comment below line
  //then run time will be O(n) else O(nlogn)
  let array = array2;
  array.sort((a, b) => a[0] - b[0]);

  let newTempArray = [];
  let i = 0;
  for (let j = 0; j < array.length; j++) {
    if (
      j != array.length - 1 &&
      array[j][i] < array[j + 1][i] &&
      array[j][i + 1] > array[j + 1][i] &&
      array[j][i + 1] < array[j + 1][i + 1]
    ) {
      newTempArray.push([array[j][i], array[j + 1][i + 1]]);
      j++;
    } else {
      newTempArray.push(array[j]);
    }
  }
  i = 0;
  array = [];
  for (let j = 0; j < newTempArray.length; j++) {
    if (
      j != newTempArray.length - 1 &&
      newTempArray[j][i] < newTempArray[j + 1][i] &&
      newTempArray[j][i + 1] > newTempArray[j + 1][i] &&
      newTempArray[j][i + 1] < newTempArray[j + 1][i + 1]
    ) {
      array.push([newTempArray[j][i], newTempArray[j + 1][i + 1]]);
      j++;
    } else {
      array.push(newTempArray[j]);
    }
  }
  return array;
}

console.log("mergetOverlappingINterval::", mergetOverlappingINterval(array2));
