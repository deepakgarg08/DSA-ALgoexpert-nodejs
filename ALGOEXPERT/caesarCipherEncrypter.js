// O(n) time and space

let string = "xyz";
let key = 2;
function caesarCipherEncrypter(string, key) {
  let newstring = "";

  for (let i = 0; i < string.length; i++) {
    let tempstring = "";

    if(key>26){
        key = key % 26
        console.log('key', key)
    }
    tempstring = Number(string.charCodeAt(i)) + key;

    if (tempstring > 122) {
      let diff = tempstring - 122; //122 is z ascii value
      let ascii = 96 + diff; //from 97 a starts
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
