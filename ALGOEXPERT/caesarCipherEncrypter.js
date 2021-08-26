let string = "xyz";
let key = 2;
function caesarCipherEncrypter(string, key) {
  let newstring = "";

  for (let i = 0; i < string.length; i++) {
    let tempstring = "";
    tempstring = Number(string.charCodeAt(i));
    tempstring += key
    if (tempstring > 122) {
      let diff = tempstring - 122;
      let ascii = 96 + diff;
      tempstring = String.fromCharCode(ascii);
      newstring += tempstring
    }else{
        tempstring = String.fromCharCode(tempstring);
      newstring += tempstring

    }
  }
  return newstring
}

console.log("caesarCipherEncrypter:: ", caesarCipherEncrypter(string, key));
