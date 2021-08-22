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

  let i = array[0],
  j = array[1],
  k = array[2];
  for (let cc = 0; cc < array.length; cc++) {
  
    // if (array[i] > array[j]) {
    if (i > j && i > k) {
      console.log("i is greater", i);
      [i, j,k] = [j,k, i];

      console.log(`print i,j,k`, i, j, k);
    } else if (i > j && i < k) {
      console.log("k is greater", k);
      [i, j] = [j, i];
      console.log(`print i,j,k`, i, j, k);
    } else if (i < j && i > k) {
      console.log("j is greater", j);
      [i, j, k] = [k, i, j];
      console.log(`print i,j,k`, i, j, k);
    } else if (j > i && j > k) {
      console.log("j is greater..", j);
      [k, j] = [j, k];
      console.log(`print i,j,k`, i, j, k);
    } else if (i === j && i < k) {
      //do nothing
      console.log("k is greater", k);
      console.log(`print i,j,k`, i, j, k);
    } else if (i === j && i > k) {
      console.log("i,j are greater", i);
      [i, k] = [k, i];
      console.log(`print i,j,k`, i, j, k);
    } else if (i === k && j > k) {
      // 10,20,10
      [j, k] = [k, j];
      console.log(`print i,j,k`, i, j, k);
    } else if (i === k && j < k) {
      //10,5,10
      [i, j] = [j, i];
      console.log(`print i,j,k`, i, j, k);
    } else {
      //all are equal do nothing
      console.log(`print, equal i,j,k`, i, j, k);
    }
  }
  return array;
}

console.log("sort", sort(array));
