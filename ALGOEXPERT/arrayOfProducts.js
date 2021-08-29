//O(n2) run time and O(n) space

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
    return  logic2(array, result);
  }
  
  function logic2(array, result) {
    let product = 1;
    let i = 0
    
    // for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
          product*= array[j]
      }
      for (let j = 0; j < array.length; j++) {
          let calc = product/array[j]
         result.push(calc)
    }
    return result
  }
  
  console.log("arrayOfProducts2:: ", arrayOfProducts2(array));
  

