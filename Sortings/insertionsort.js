//bubble sort, work by swapping values
//O(n*2) // O(1) space
//useful when array is small

var array =[5, 1, 4 ,2 ,8 ]
var array =[64, 34, 25, 12, 22, 11, 90];

function insertionSort(array){
    
    for (let i = 1; i < array.length-1; i++) {
    
        for (let j = 0; j < array.length - 1; j++) {

            if(array[j ] > array[i]){
                //swap values
                [array[j], array[i]] = [ array[i], array[j]]
            }
        }
    }
    return array
}

console.log('insertionSort()', insertionSort(array))



