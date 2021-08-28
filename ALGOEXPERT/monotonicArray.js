// O(n) time and O(1)
// var array = [-1, 55 , 10, -1100,-1100, -1101,-1102,-9001]
// var array = [1,1,1,1,1,1,1,1,2,1]
// var array = [];
var array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];

function monotonicArrayCheck(array) {
  if (array.length === 0) return true;
  let counter1 = 1;
  let counter2 = 1;

  for (let i = 0; i < array.length; i++) {
    //for increasing
    if (array[i] < array[i + 1]) {
      counter1++;
    }
    //for decreasing
    else if (array[i] > array[i + 1]) {
      counter2++;
    } else if (array[i] === array[i + 1]) {
      counter1++;
      counter2++;
    }
  }

  return counter2 === array.length || counter1 === array.length;
}

console.log("monotonicArrayCheck:: ", monotonicArrayCheck(array));
