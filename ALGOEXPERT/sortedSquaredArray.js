function sortedSquaredArray() {
  //method1 and method2 takes nlogn time
  // var array = [1,2,3,4,5,6,7,8,9,10]
  // var array = [-11,-7,-3,4,5,6,7,8,9,10]
  var array = [-5, -4, 2, 3, 6];
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i] * array[i];
  }
    array.sort((a, b) => a - b);
  console.log("array nlogn", array);

  //method 2 O(n) space and time

  let array2 = [-7,-5,  -4, 1, 2, 3,8];

  //l,r,rr stands for left, right, resultright
  let result = new Array(array2.length)
  let l = 0, r= array2.length -1
  let rr =result.length-1
  let lengthofarray =0
  while(lengthofarray< result.length){

    if(Math.abs(array2[l]) > Math.abs(array2[r])  ){
        result[rr]  = array2[l] * array2[l]
        rr--
        l++

    }else{
        result[rr]  = array2[r] * array2[r]
        r--
        rr--
    }
    lengthofarray++
}
  return result;
}

console.log("sortedSquaredArray:: ", sortedSquaredArray());
