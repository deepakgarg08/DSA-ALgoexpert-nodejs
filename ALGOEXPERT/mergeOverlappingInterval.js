var array = [
  [1, 2],
  [6, 8],
  [3, 5],
  [9, 10],
  [4, 7],
];
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

function mergetOverlappingINterval(array) {
  //if array is sorted given, then comment below line 
  //then run time will be O(n) else O(nlogn)
  array.sort((a,b) => a[0]- b[0]);
  console.log('array', array)


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

console.log("mergetOverlappingINterval::", mergetOverlappingINterval(array));
