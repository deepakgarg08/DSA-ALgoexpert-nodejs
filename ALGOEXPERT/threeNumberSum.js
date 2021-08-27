// O(n*n) O(n) 
var array = [12, 3, 1, 2, -6, 5, -8, 6];
var target = 0;
function threeNumbersSum2(array,target) {
  array.sort((a, b) => a - b);
  let triplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      let sum = array[i] + array[left] + array[right];
      if (sum === target) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (sum > target) {
        right -= 1;
      } else if (sum < target) {
        left += 1;
      }
    }
  }
  return triplets;
}
console.log("threeNumbersSum2:: ", threeNumbersSum2(array,target));




// method 2 tried but not working efficiently

var array = [12, 3, 1, 2, -6, 5, -8, 6];
// var array = [2,3,-5];
let targetSum = 0;
function threeNumbersSum(array) {
  // array.sort((a, b) => a - b);
  //   console.log("array", array);

  let subArray = [];
  let numberMap = {};
  let resultArray = [];

  for (let n = 0; n < array.length; n++) {
    numberMap[array[n]] = true;
  }
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      m = targetSum - (array[i] + array[j]);

      if (m == array[i]) {
        break;
      } else if (m == array[j]) {
        break;
      } else if (-m == array[i]) {
        break;
      } else if (-m == array[j]) {
        break;
      } else if (m in numberMap) {
        subArray.push(m, array[i], array[j]);
        resultArray.push(subArray);
        subArray = [];
        break;
      }
    }
  }


  return resultArray
}

console.log("threeNumbersSum: getting duplicates: ", threeNumbersSum(array));
