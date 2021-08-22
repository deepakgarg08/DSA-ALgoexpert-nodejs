//bubble sort, work by swapping values
//O(n*2) // O(1) space

var array =[5, 1, 4 ,2 ,8 ]
var array =[64, 34, 25, 12, 22, 11, 90,64, 34, 25, 12, 22, 11, 90];

function bubbleSory(array){
    
    for (let i = 0; i < array.length-1; i++) {
    
        for (let j = 0; j < array.length -i - 1; j++) {

            if(array[j ] > array[j+1]){
                //swap values
                [array[j], array[j+1]] = [ array[j+1], array[j]]
            }
        }
    }
    return array
}


//similar 2nd approach
function bubbleSortt(array){
    
    for (let i = 0; i < array.length-1; i++) {
    
        for (let j = i+1; j < array.length - 1; j++) {

            if(array[i ] > array[j]){
                //swap values
                [array[i], array[j]] = [ array[j], array[i]]
            }
        }
    }
    return array
}

console.log('bubbleSortt()', bubbleSortt(array))





console.log('bubbleSory()', bubbleSory(array))



