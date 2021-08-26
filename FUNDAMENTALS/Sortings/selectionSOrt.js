//find minimum value and insert into arr[i...n]
//O(n*2) // O(1) space
//useful when array is small

// // var array =[64, 34, 25, 12, 22, 11, 90];
// var array = [5, 10, 4, 2, 8, 1];
var array = [64, 25, 12, 22, 11];

console.time("start-m2");

function selectionSortt(array) {
  let min_indx;
  for (let i = 0; i < array.length - 1; i++) {
    min_indx = i;
    for (let j = i + 1; j < array.length; j++)     // {
      if (array[min_indx] > array[j]) {
        min_indx = j;
      }

        // console.log("array[i]", array[i]);
        console.log('i', i)
        console.log("min_indx", min_indx);
        // console.log("array[min_indx]", array[min_indx])
        // [
        //   (array[min_indx], array[i])
        // ] = [array[i], array[min_indx]];
    }
  // }
  console.timeEnd("start-m2");
  return array;
}

console.log("selectionSort()", selectionSortt(array));
// console.log('insertionSort()', insertionSort(array))

// Javascript program for implementation of selection sort
function swap(arr, xp, yp) {
  var temp = arr[xp];
  arr[xp] = arr[yp];
  arr[yp] = temp;
}

function selectionSort(arr, n) {
  var i, j, min_idx;

  // One by one move boundary of unsorted subarray
  for (i = 0; i < n - 1; i++) {
    // Find the minimum element in unsorted array
    min_idx = i;
    for (j = i + 1; j < n; j++)
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }

    console.log("i", i);
    console.log("min_idx", min_idx);
    // console.log("arr", arr);
    // Swap the found minimum element with the first element
    swap(arr, min_idx, i);
  }
}

function printArray(arr, size) {
  var i;
  for (i = 0; i < size; i++) console.log(arr[i] + " ");
  console.log(" <br>");
}

var arr = [64, 25, 12, 22, 11];
var n = 5;
selectionSort(arr, n);
console.log("Sorted array: <br>");
printArray(arr, n);

// This code is contributed by akshitsaxenaa09.
