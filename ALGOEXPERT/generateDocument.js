//O(n) space and time

let generateDocument = () => {
  
  
  var string = "the quick brown fox jump over thei lazy dog"; 
  var document = "pack my box with five dozen jug"; 

  var string = "thequickbrownfoxjumpoverthelazydogi";
  var document = "packmyboxwithfivedozenjug";

  var string = "Bste!hetsi og EAxpelrt x ";
  var document = "AlgoExpert is the Best!";

  let letterMap = {};
  let counter = 0;
  for (let n = 0; n < string.length; n++) {
    if (string[n] in letterMap) {
      letterMap[string[n]] += 1;
    } else {
      letterMap[string[n]] = 1;
    }
  }

  for (let i = 0; i < document.length; i++) {
    if (document[i] in letterMap && letterMap[document[i]] > 0) {
      letterMap[document[i]] -= 1;
      counter++;
    }
  }

  return counter === document.length;
};
console.log("generateDOcumet: ", generateDocument());
