let string = "AAAAAAAAAAAAABBCCCCDD";
//here counter adding one less value, so I added +1 everywhere 
//another way is to use counter =1 by default
function runLengthEncoding(string) {
  let counter = 0;
  let newString = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      counter++;
    } else if (counter + 1 > 9) {

      let diff = (counter % 9) + 1;
      let nstring = 9 + string[i - 1] + diff + string[i - 1];
      newString += nstring;
      counter = 0;
    } else {
      newString += counter + 1 + string[i - 1];
      counter = 0;
    }
  }

  return newString;
}

console.log("runLengthEncoding:: ", runLengthEncoding(string));
