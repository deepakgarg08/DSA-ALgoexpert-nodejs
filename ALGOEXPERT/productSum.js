let array = [10, [10, [10, 10]]]; //x+2*(y+z) // 1+2*(2+3) = 13
// 7 + 10 + 2*(5 + 30)
// 17 + 70
//87

//not finished
let n = 1;
let sum = 0;
let rs = 0;
function productSum(array) {
  if (!Array.isArray(array)) return 0;
  
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      let tempsum = 0;

      console.log("array[i])", array[i], i);
      n++;
      productSum(array[i]);
      n = 1;
      console.log("sum....", sum);
    } else {
      console.log("array:...", array[i], i);
      sum += array[i];
      console.log("sum", sum);
    }
  }
}

console.log("productSum:: ", productSum(array));
