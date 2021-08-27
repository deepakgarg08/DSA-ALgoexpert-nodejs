//https://github.com/deepakgarg08/algoexpert-data-structures-algorithms/blob/master/Questions/tandem-bicycle.PNG
//nlogn O(n)

let redshirt = [5, 5, 3, 9, 2];
let blueshirt = [3, 6, 7, 2, 1];
let fastest = true;
function tandemBicycle(redshirt, blueshirt, fastest) {
  console.time("time");
  //if just in case pair is required for printing
  let pair = [];
  let res_max_min = 0;
  let sum = 0;
  redshirt.sort((a, b) => b - a);
  blueshirt.sort((a, b) => a - b);

  for (let i = 0; i < blueshirt.length; i++) {
    pair.push([redshirt[i], blueshirt[i]]);

    if (fastest) {
      res_max_min = pair[i][0] > pair[i][1] ? pair[i][0] : pair[i][1];

      sum += res_max_min;
    } else {
      res_max_min = pair[i][0] < pair[i][1] ? pair[i][0] : pair[i][1];

      sum += res_max_min;
      sum += res_max_min;
    }
  }
  console.timeEnd("time");
  return sum;
}

console.log("tandemBicycle:: ", tandemBicycle(redshirt, blueshirt, fastest));

//method2.. removed array used for pairing i.e O(1) space

function tandemBicycle2(redshirt, blueshirt, fastest) {
  console.time("time");
  redshirt.sort((a, b) => b - a);
  blueshirt.sort((a, b) => a - b);
  let sum = 0;

  for (let i = 0; i < blueshirt.length; i++) {
    if (fastest) {
      sum += Math.max(redshirt[i], blueshirt[i]);
    } else {
      sum += Math.min(redshirt[i], blueshirt[i]);
    }
  }
  console.timeEnd("time");
  return sum;
}
console.log("tandemBicycle2:: ", tandemBicycle2(redshirt, blueshirt, false));
