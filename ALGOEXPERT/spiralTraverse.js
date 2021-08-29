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
    for (let col = 0; col < endCol + 1; col++) {
      result.push(array[startRow][col]);
    }

    for (let row = startRow + 1; row < endRow + 1;row++) {
      result.push(array[row][endCol]);
    }

    for (let col = endCol; col > startCol + 1; col--) {
      //
      result.push(array[endRow][col]);
    }

    for (let row = endRow; row > startRow; row--) {
      result.push(array[row][startCol]);
    }

    startRow++;
    endRow--;
    startCol++;
    endCol--;
  }

  return result;
}

console.log("spiralTraverse:: ", spiralTraverse(array));
