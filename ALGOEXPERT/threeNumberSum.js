var array = [12, 3, 1, 2, -6, 5, -8, 6];
// var array = [2,3,-5];
let targetSum = 5;
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
      }
      else if (-m == array[i]) {
        break;
      }
      else if (-m == array[j]) {
        break;
      }

      else if (m in numberMap) {
        subArray.push(m, array[i], array[j]);
        resultArray.push(subArray);
        subArray = [];
        break
      }
    }
  }
  let newresult = [];
  console.log("resultArray", resultArray);
  for (let i = 0; i < resultArray.length; i++) {
    resultArray[0][i];
    newresult.push(resultArray[i])
  }
  console.log("newresult", newresult);
}

console.log("threeNumbersSum:: ", threeNumbersSum(array));
