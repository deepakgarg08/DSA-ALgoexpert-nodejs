// https://github.com/deepakgarg08/algoexpert-data-structures-algorithms/blob/master/Questions/validate-subsequence.PNG

const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [-1 - 1, 8, 10];
let j = 0;
let counter = 0;

function subSequence(array, sequence) {
  for (let i = 0; i < sequence.length; i++) {
    while (j < array.length) {
      if (sequence[i] === array[j]) {
        counter++;
        j = j + 1;
        break;
      } else j++;
    }
  }

  return counter === sequence.length ? true : false;
}
console.log("subsequence:: ", subSequence(array, sequence));
