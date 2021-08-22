// var array = [3,5,3,5,3,5,3,5,3,5];
var array = [3, 3, 3, 3, 3, 3, 3, 3, 3, 5, 3, 3, 5, 5, 3, 5, 5, 5, 5, 5, 5];
// var array = [5, 3, 5, 3, 5, 3];
// var array = [5, 3, 5, 3, 5, 3, 5, 3, 5, 3, 5];
// var array = [5, 3,5,3];
var array = [10, 10, 10];
var array = [3, 2, 1, 3, 1];
// var array = [64, 34, 25, 12, 22, 11, 90];

function sort(array) {
  console.log("array initial", array);

  let i = 0,
    k = 2;
  for (let j = 1; j < array.length; j = j + 1) {
    if (array[i] > array[j]) {

      [array[i], array[j]] = [array[j], array[i]];
      console.log("array if", array);

      if (array[i] > array[k]) {
        [array[i], array[k]] = [array[k], array[i]];
        console.log("array if if..print ij", array,i,j);
        // i++;
      } 
      if (array[j] > array[k]) {
        
        [array[j], array[k]] = [array[k], array[j]];
        console.log("array if if if..print ij", array,i,j);

      }
    } else if (array[i] == array[j] || array[k] > array[j]) {
      console.log("arrayelseif", array);
      [array[k], array[j]] = [array[j], array[k]];

      // [array[i + 1], array[j]] = [array[j], array[i + 1]];
      // i++;
    }
    console.log("array final after 1 iter", array);
  }
  return array;
}

console.log("sort", sort(array));
