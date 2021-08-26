//bubble sort, work by swapping values
//O(n*2) // O(1) space
//useful when array is small

var array =[5, 1, 4 ,2 ,8 ]
var array =[64, 34, 25, 12, 22, 11, 90];
// 1 5 4 2 8 | 1
// 1 4 5 2 8
// 1 

function insertionSort(arr){
    console.time("start-m1")
    n = arr.length
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        j = i - 1; 
   
        /* Move elements of arr[0..i-1], that are 
        greater than key, to one position ahead 
        of their current position */
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 

    } 
    console.timeEnd("start-m1")
    console.time("start-m2")
    // method 2 
    let array = arr.slice()
    for (let i = 1; i < array.length; i++) {
    
        let current, previous;
        previous = i-1
        current = array[i]

        while(previous >= 0 && array[previous] > current){

            array[previous+1] = array[previous]
            array[previous] = current
            previous--
        }
        
    }  
    console.timeEnd("start-m2")
    console.log("from 2nd for loop result::",array)
    return arr
}

console.log('insertionSort()', insertionSort(array))
// console.log('insertionSort()', insertionSort(array))



