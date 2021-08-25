//https://github.com/deepakgarg08/algoexpert-data-structures-algorithms/blob/master/Questions/nth-fibonacci.PNG

//O(n) run time
let n1 = 0;
let n2 = 1;
let ns = [];
let sum = 0;
let resultInString = ""
function nthfibbonaci(n) {
  if (n === 1) {
    ns.push(n1);
    resultInString += n1 + ", "
    return;
  }

  nthfibbonaci(n - 1);
  if (n === 2) {
    ns.push(n2);
    resultInString += n2 + ", "

    return;
  }
  sum = n1 + n2;
  n1 = n2;
  n2 = sum;
  ns.push(sum);
  resultInString += sum + ", "
  console.log('resultInString', resultInString)


  return ns;
}
console.log("nthfibbonaci()", nthfibbonaci(8));
