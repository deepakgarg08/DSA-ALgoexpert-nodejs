// O(n)time and O(1)space

let firstNonRepeatingCharacter = () => {
  var string = "abcdcaf";
  var string = "abcdefghi abcdefhi ";
  //   var string = "abcdcaf";
  let characterStore = {};
  for (let i = 0; i < string.length; i++) {
    if (string[i] in characterStore) {
      characterStore[string[i]] += 1;
    } else {
      characterStore[string[i]] = 1;
    }
  }
  for (let j = 0; j < string.length; j++) {
    if (string[j] in characterStore && characterStore[string[j]] === 1) {
      return string[j];
    }
  }
};
console.log("firstNonRepeatingCharacter:: ", firstNonRepeatingCharacter());
