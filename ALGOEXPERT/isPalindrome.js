// var string = "abaxyzzyxf";
var string = "abcba";

function isPalindrome(string) {
  let l = 0;
  let r = string.length - 1;
  let length = 0;
  while (l < string.length) {
    if (string[l] === string[r]) {
      r--;
      length++;
    }
    l++;
  }
  return length === string.length ? true : false;
}

console.log("isPalindrome:: ", isPalindrome(string));
