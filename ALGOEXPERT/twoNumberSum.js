// O(nlogn)
//method 1
let array = [3, 5, -4, 8, 11, 1, -1, 6];

let sum = (array, target) => {
  array.sort((a, b) => a - b);
  let counter = 1,
    l = array[0],
    r = array[array.length - 1];
  while (counter <= array.length) {
    if (l + r === target) return [l, r];
    else if (l + r > target) {
      r = array[array.length - 1 - counter];
    } else {
      l = array[counter];
    }

    counter++;
  }
  return array;
};

console.log("sum", sum(array, 5));
console.log("sum", sum(array, 19));
console.log("sum", sum(array, 9));
console.log("sum", sum(array, -5));
console.log("sum", sum(array, 10));
console.log(".............................\n");

//method2
//O(n) time and space 

let array2 = [3, 5, -4, 8, 11, 1, -1, 6];

let sum2 = (array2, target) => {
  let existingNumbers = {};

  for (let i = 0; i < array2.length; i++) {
    let secondnumber = target - array2[i];
    if (secondnumber === existingNumbers[secondnumber]) {
      return [secondnumber, array2[i]];
    }

    existingNumbers[array2[i]] = array2[i];
  }
  // console.log('existingNumbers', existingNumbers)
  return array2;
};
console.log("sum2", sum2(array, 5));
console.log("sum2", sum2(array, 19));
console.log("sum2", sum2(array, 9));
console.log("sum2", sum2(array, -5));
console.log("sum2", sum2(array, 10));
