//decode string
// var string = "HLW_EO__L";
var string = "HLWL_HLWL___EOOD_EOOD___L_R__L_R_";
var depth = 3;
let decodeString = (string, depth) => {
  let decodedStr = "";
  let lengthOfColumn = string.length / depth;
  let j=0

  for (let n = 0; n< lengthOfColumn; n++) {
    decodedStr += string[j];


    while (j <= string.length) {
      j = j + lengthOfColumn + 1;

      if (j < string.length) {
        decodedStr += string[j];
      }
    }
    j=n+1

    decodedStr= decodedStr.replace(/_/g, " ")

}
console.log("decodedStr", decodedStr.trim());

};
console.log("decodeString", decodeString(string, depth));
