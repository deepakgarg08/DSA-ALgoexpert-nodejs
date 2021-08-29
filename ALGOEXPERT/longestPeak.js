//O(n)time and O(n) space
//space can be improved

let array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, -5, 2, 3];

function longestPeak(array) {
  //m stands for middle
  let m = 1;
  let counter = 3;
  let max = 3;
  let peak = [];
  while (m < array.length - 1) {
    if (array[m] > array[m - 1] && array[m] > array[m + 1]) {
      counter++;
      peak.push(m);
      m++;
    } else {
      m++;
    }
  }

  let vmax = [];
  for (let j = 0; j < peak.length; j++) {
    for (let i = peak[j]; i < array.length; i++) {
      if (array[i + 1] > array[i + 2]) {
        counter++;
        max = counter;
      } else {
        counter = 3;

        vmax.push(max);
        break;
      }
    }
  }

  return Math.max(...vmax);
}

console.log("longestPeak:: ", longestPeak(array));
