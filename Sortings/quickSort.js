//quick sort, work by swapping values
//O(n*2) // O(1) space

var array = [10, 80, 30, 90, 40, 50, 70];
// var array =[64, 34, 25, 12, 22, 11, 90];

function quicksort(array, start, end) {
  //starting index

  if (end > start) {
    let partt = partitioning(array, start, end);
    quicksort(array, start, partt - 1);
    quicksort(array, partt + 1, end);
  }
  return array;
}

let partitioning = (array, start, end) => {
  let i = start - 1;
  let pivot = array[end];

  while (end > start) {
    for (let j = 0; j < array.length; j++) {
      if (pivot >= array[j]) {
        i++;
        [array[i], array[j]] = [array[j], array[i]];
      } else {
      }
    }
  }
  console.log("check i", i);
  return ++i;
};

console.log("quicksort()", quicksort(array, 0, array.length - 1));
