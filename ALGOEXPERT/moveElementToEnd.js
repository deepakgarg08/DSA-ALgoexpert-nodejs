//function should mutate input array only
//O(n)runtime and O(1)


let array = [2, 1, 2, 5, 5, 2, 2, 5 , 7 , 9 , 15,3, 4, 2, 2, 2];
let toMove = 2;
function moveElement(array, toMove) {
  let l = 0;
  let r = array.length - 1;
  for (let i = 0; i < array.length; i++) {
    if (array[r] !== toMove) {
      break;
    } else {
      r--;
    }
  }
  //now swap values
  for (let i = 0; i < r; i++) {
    if (array[l] === toMove) {
      //swap
      [array[r], array[l]] = [array[l], array[r]];
      r--;
      l++;
    } else {
      l++;
    }
  }
  return array
}

console.log("moveElement:: ", moveElement(array, toMove));
