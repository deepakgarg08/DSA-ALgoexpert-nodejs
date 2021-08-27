
//nlogn 
function tandemBicycle() {
   console.time("time") 
  let redshirt = [5, 5, 3, 9, 2];
  let blueshirt = [3, 6, 7, 2, 1];
  let pair = [];
  let fastest = true;
  let res = 0;
  let resultantarr = [];

  redshirt.sort((a, b) => b - a);
  blueshirt.sort((a, b) => a - b);

  for (let i = 0; i < blueshirt.length; i++) {
    const element = blueshirt[i];

    pair.push([redshirt[i], blueshirt[i]]);

    if (fastest) {
      res = Math.max(...pair[i]);
      resultantarr.push(res);
    } else {
      res = Math.min(...pair[i]);
      resultantarr.push(res);

    }
  }
  console.timeEnd("time")
  return resultantarr.reduce((a,b) => a+b)
}

console.log("tandemBicycle:: ", tandemBicycle());
