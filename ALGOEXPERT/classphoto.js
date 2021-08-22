// https://github.com/deepakgarg08/algoexpert-data-structures-algorithms/blob/master/Questions/class-photos.PNG

//class photos

//o(nlogn) || o(1)

let redTshirtHeight = [5, 8, 1, 3, 4];

let blueTshirtHeight = [6, 9, 2, 4, 9];

function classPhoto(redTshirtHeight, blueTshirtHeight) {
  //sort it
  redTshirtHeight.sort((a, b) => a - b);
  blueTshirtHeight.sort((a, b) => a - b);
  let ifcounter = 0;
  let elsecounter = 0;
  //compare
  
  for (let i = 0; i < redTshirtHeight.length; i++) {
    if (redTshirtHeight[i] > blueTshirtHeight[i]) {
      ifcounter++;
    } else if (redTshirtHeight[i] < blueTshirtHeight[i]) {
      elsecounter++;
    } else {
      return false;
    }
  }


 return ifcounter === redTshirtHeight.length ||  elsecounter === redTshirtHeight.length ? true : false
}

console.log("classPhoto", classPhoto(redTshirtHeight, blueTshirtHeight));
