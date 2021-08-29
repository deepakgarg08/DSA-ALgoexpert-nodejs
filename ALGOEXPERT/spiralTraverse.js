//O(n) time and O(n) space
let array = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

function spiralTraverse(array) {
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;
  let result = [];

  while (startRow <= endRow && startCol <= endCol) {
    //from 00 to 03
    for (let col = 0; col < endCol + 1; col++) {
      result.push(array[startRow][col]);
    }
    //from 13 to 33 //because 03 already traversed

    for (let row = startRow + 1; row < endRow + 1; row++) {
      result.push(array[row][endCol]);
    }
    //from 32 to 30 ///because 33 already traversed

    for (let col = endCol; col > startCol + 1; col--) {
      result.push(array[endRow][col]);
    }
    //from 20 to 10 //because 10 and 30 already traversed

    for (let row = endRow; row > startRow; row--) {
      result.push(array[row][startCol]);
    }

    //in other iterations inner loops will run
    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }

  return result;
}

console.log("spiralTraverse:: ", spiralTraverse(array));
