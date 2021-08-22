//bubble sort, work by swapping values
//O(nlogn) // O(1) space
//useful when array is small

var array = [5, 1, 4, 2, 8,3];
// var array = [64, 34, 25, 12, 22, 11, 90];

function mergeSort(array, start, end) {
  
    if(start>=end){
        return;//returns recursively
    }
    let middle = parseInt(end=start/2) +1 
    // console.log('middle', middle)

    //divide the array into two parts
    //first part
    let p1 = mergeSort(array,start, middle )
    //2nd part
    let p2 = mergeSort(array,middle+1,end )
    //merge both part
    let merged = merge(array, start,middle,end)
//   return array;
}

const merge = (array, start,middle,end)=>{
    console.log('end', end)

    //creating two temp array
    let L = new Array(middle-start -1)
    let R = new Array(end - middle)

    for(let i=0; i<L.length; i++){
        L.push(array[i])
    }
    for(let i=0; i<R.length; i++){
        R.push(array[i])
    }
    // let i =j = 0
    // while()
    
    console.log('L', L)
    console.log('R', R)
}

console.log("mergeSort()", mergeSort(array, 0 ,  array.length-1));
