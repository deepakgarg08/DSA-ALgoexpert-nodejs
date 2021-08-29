//O(n2) run time and O(n) space

let array = [5, 1, 4, 2];

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

console.log("arrayOfProducts:: ", arrayOfProducts(array));
