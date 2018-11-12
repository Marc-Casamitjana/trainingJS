function reduce(array, callback, acc) {
    let i;
    if(!acc){
        acc = array[0]
       i = 1;            
    }else{
       i = 0
    }
    for (i; i < array.length; i++) {
        acc = callback(acc, array[i], i);
    }
    return acc;
}


//si no existe acumulador, crealo.
// console.log(reducido);

var arg = [1, 2, 3, 4,5];

// var obj = arg.reduce((bef, aft, i) => {
//     bef[i] = aft;
//     return bef;
    
// },{});
let reducido = reduce(arg, function (vAnt, vAct, i) {
    return vAnt + vAct;
    // vAnt[i] = vAct
    // return vAnt
});

console.log(reducido)




