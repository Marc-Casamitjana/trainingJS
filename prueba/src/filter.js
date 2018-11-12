arr = [1,2,3,4,5,6];

function filtre(arr, fn) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i],i)){ 
            newArr.push(arr[i]) 
        }
    }
    return newArr;
}

let filtrado = filtre(arr, function (e, i) {
    console.log(i)
    return e === 4;
})

console.log(filtrado)