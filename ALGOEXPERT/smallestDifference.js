// https://github.com/deepakgarg08/algoexpert-data-structures-algorithms/blob/master/Questions/smallest-difference.PNG
//O(nlogn) O(n)
var array1 = [-1, 5, 10, 20, 30, 3];
var array2 = [26, 134, 27, 15, 19];
function smallestDifference(a1, a2) {
  let a1l1, a2l1;
  let min = Infinity;
  a1.sort((a, b) => a - b);
  a2.sort((a, b) => a - b);

  a1l1 = a2l1 = 0;
  let result = [];
  while (a1l1 < a1.length) {
    let sum = Math.abs(a1[a1l1] - a2[a2l1]);
    if (a1[a1l1] < a2[a2l1]) {
      // right
      if (min > sum) {
        result = [];

        result.push(a1[a1l1], a2[a2l1]);
        min = sum;

        a1l1++;
      } else {
        a1l1++;
      }
    } else if (a1[a1l1] > a2[a2l1]) {
      //left
      if (min > sum || min == sum) {
        result = [];

        result.push(a1[a1l1], a2[a2l1]);
        min = sum;

        a2l1++;
      } else {
         a2l1++
      }
    } else {
      console.log("any exception occured...will not fire");
    }
  }

  return { result, miniumDifference: min };
}

console.log("smallestDifference:: ", smallestDifference(array1, array2));
