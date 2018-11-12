arr = ['hola',2,3,4,'adios']

function  foreach(arr, fn){
    for(let i = 0; i<arr.length; i++){
       fn(arr[i], i)
    }
}
    
foreach(arr, function(e, i){
    return i +' = ' +e;
})


