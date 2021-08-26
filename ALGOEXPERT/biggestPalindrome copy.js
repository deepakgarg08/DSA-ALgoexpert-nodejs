// let string = "abcba";
let string = "aaaaxyzzyx";

function biggestPalindrome(string) {
  //   console.log("string", string.substring(4, 8).split("").reverse().join(""));
  let l = 0;
  let r = string.length - 1;

  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < string.length; j++) {
      if (string.length % 2 === 0) {
        let m = string.length;
        if (string[i] === string[r]) {
          console.log("....", string[i], i);
          r = r - 1;
        } else {
          // r--;
        }

        if (
          string.substring(0, m / 2) ===
          string
            .substring(m / 2, m)
            .split("")
            .reverse()
            .join("")
        ) {
          //   console.log("string.substring(0, m)", string.substring(0, m / 2));
          //   console.log("string.substring(m, end)", string
          //       .substring(m / 2 , m)
          //       .split("")
          //       .reverse()
          //       .join("")
          //   );

          break;
        }
      } else {
        //7
      }
    }
  }
}

console.log("biggestPalindrome:: ", biggestPalindrome(string));

//..//..//..//..//..//..//..//..//..//..//..//..//..//
//..//..//..//..//..//..//..//..//..//..//..//..//..//
