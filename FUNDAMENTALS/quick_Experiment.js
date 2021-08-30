// let a = [10,3,5,2,5,234,9]
let ab = [[10,3],[5,2],[3,9]]

let i=0
ab.sort((a,b) => {
    console.log(a,b,i);
    // if(array[i][0])    

    // return a-b
})
console.log('a', ab)


var a = [[12, 'AAA'], [58, 'BBB'], [28, 'CCC'],[18, 'DDD']];

// a.sort(sortFunction);
console.log('a.sort(sortFunction);', a.sort(sortFunction))

function sortFunction(a, b) {
    if (a[0] === b[0]) {
        return 0;
    }
    else {
        return (a[0] < b[0]) ? -1 : 1;
    }
}