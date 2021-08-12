// https://github.com/deepakgarg08/algoexpert-data-structures-algorithms/blob/master/Questions/minimum-waiting-time.PNG
//calc min query time

//o(nlogn) | o(1)

var queries = [1, 4, 5]; //11
// 0 1 5
var queries = [3, 2, 1, 2, 6, 8]; //17
//[1,2,2,3,6]
//0 1 3 5 8
let totalSum = 0;
let res = 0;

let minWaitingTimeQueries = (queries) => {
  queries.sort((a, b) => a - b);
  for (let i = 1; i < queries.length; i++) {
    totalSum += queries[i - 1];
    res += totalSum;
  }

  return res;
};

console.log("minWaitingTimeQueries(queries)", minWaitingTimeQueries(queries));
