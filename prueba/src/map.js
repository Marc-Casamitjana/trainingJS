arr = [1,2,3,4,5];
/**
 * Gets an array, and transforms it.
 * @param {array} arr 
 * @param {function} fn 
 * @returns {array} Returns an array.
 */
function myMap(arr, fn, caca?){
    let newArr = [];
    for(let i = 0; i<arr.length; i++){
        newArr.push(fn(arr[i], i))
     }
     return newArr;
}

let mapping = myMap(arr, function(e, i){
    return e*2;
})

console.log(mapping);

