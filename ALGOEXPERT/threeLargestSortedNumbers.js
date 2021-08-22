// https://github.com/deepakgarg08/algoexpert-data-structures-algorithms/blob/master/Questions/find-three-largest-numbers.PNG
let inputArr = [141, 1, 17, -7, -17, -27, 18, 541, 8, 780,7, 7];

let threeLargestNumbers = (inputArr) => {
  if (inputArr.length === 3) return inputArr;

  let resultArray = [];

  for (let i = 0; i < inputArr.length; i++) {
    if (resultArray.length !== 3) {
      resultArray.push(inputArr[i]);
      continue;
    }

    resultArray.sort((a, b) => a - b);

    if (inputArr[i] > resultArray[0]) {
      resultArray[0] = inputArr[i];
      
    }
  }
  return resultArray;
};


console.log("threelargestNumbersSorted::", threeLargestNumbers(inputArr));
