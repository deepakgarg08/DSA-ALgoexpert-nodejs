var currencies = [1, 3, 2, 8];
// var currencies = [1, 2,  3, 7 , 11, 27, 60];
var currencies = [5,7,1,1,2,3,22];

let sum = 1;


function coinsum() {
  
  currencies.sort((a,b)=> a -b )

  for (let i = 0; i < currencies.length; i++) {

    if(sum >= currencies[i]){
      sum = sum + currencies[i];

    }    
  }

  return sum;
}
console.log("coinsum::", coinsum());
