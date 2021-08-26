// var string = "abaxyzzyxf";
//O(logn)
var string = "aaxyzabcbazyxaa";

function isPalindrome(string) {
  let l = 0;
  let r = string.length - 1;
  let length = 0;
  let middle = parseInt(string.length/2) +1
  while (l < middle) {
    if (string[l] === string[r]) {
      r--;
      length++;
    }
    l++;
  }
  return length === middle 
}

console.log("isPalindrome:: ", isPalindrome(string));
