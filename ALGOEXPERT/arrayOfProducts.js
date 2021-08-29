//O(n2) run time and O(n) space

// /https://github.com/deepakgarg08/algoexpert-data-structures-algorithms/blob/master/Questions/array-of-products.PNG

let array = [5, 1, 4, 2];
//method 1
function arrayOfProducts(array) {
  let result = [];
  let product = 1;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        product *= array[j];
      }
    }
    result.push(product);
    product = 1;
  }
  return result;
}

//O(n) time and space
console.log("arrayOfProducts:: ", arrayOfProducts(array));

function arrayOfProducts2(array) {
  let result = [];
  return logic2(array, result);
}

function logic2(array, result) {
  let product = 1;

  // for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array.length; j++) {
    product *= array[j];
  }
  for (let j = 0; j < array.length; j++) {
    let calc = product / array[j];
    result.push(calc);
  }
  return result;
}

console.log("arrayOfProducts2:: ", arrayOfProducts2(array));

//method 3 O(n) run time and space

function arrayOfProducts3(array) {
  let result = [];
  return logic3(array, result);
}

function logic3(array, result) {
  let leftRunningProducts = 1;
  let rightRunningProducts = 1;
  let leftProduct = [];
  let rightProduct = [];

  //left
  for (let j = 1; j <= array.length; j++) {
    leftProduct.push(leftRunningProducts);
    leftRunningProducts *= array[j - 1];
  }
  //right and result

  for (let j = array.length - 1; j >= 0; j--) {
    rightProduct[j] = rightRunningProducts;
    rightRunningProducts *= array[j];
    result.push(leftProduct[j] * rightProduct[j]);
  }

  return result;
}

console.log("arrayOfProducts3:: ", arrayOfProducts3(array));
