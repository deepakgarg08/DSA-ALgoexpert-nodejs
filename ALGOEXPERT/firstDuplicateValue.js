//O(n)time and space

// var array = [2, 1, 5, 2, 3, 3, 4];
var array = [2, 1, 5, 3, 2, 4];

function firstDuplicateValue(array) {
  let arraystore = {};
  for (let i = 0; i < array.length; i++) {
    if ([array[i]] in arraystore) {
      return array[i];
    } else {
      arraystore[array[i]] = true;
    }
  }
  return -1;
}

console.log("firstDuplicateValue:: ", firstDuplicateValue(array));

//method 2 O(n) time and O(1) space


function firstDuplicateValue2(array) {
    for (let i = 0; i < array.length; i++) {
      let x = Math.abs(array[i])
      if(array[x-1]< 0){
          return x
      }
      array[x-1] *= -1
      
    }
    return -1;
  }
  
  console.log("firstDuplicateValue2:: ", firstDuplicateValue2(array));
  