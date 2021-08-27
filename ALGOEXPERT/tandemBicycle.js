//https://github.com/deepakgarg08/algoexpert-data-structures-algorithms/blob/master/Questions/tandem-bicycle.PNG
//nlogn
//initially inspite of sum variable, array was used to collect values and using reduce method values were added, which was
//inefficient
function tandemBicycle() {
  console.time("time");
  let redshirt = [5, 5, 3, 9, 2];
  let blueshirt = [3, 6, 7, 2, 1];
  let pair = [];
  let fastest = true;
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
    }
  }
  console.timeEnd("time");
  return sum;
}

console.log("tandemBicycle:: ", tandemBicycle());
