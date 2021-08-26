

function sortedSquaredArray(){
    let array = [1,2,3,4,5,6,7,8,9,10]

    for (let i = 0; i < array.length; i++) {

        array[i] = array[i] * array[i]
    }

    console.log("")

    //method 2

    let array2 = array.slice()
    array2.map(e=> e*e)
    console.log('array2', array2)

    return array
}

console.log("sortedSquaredArray:: ",sortedSquaredArray())



