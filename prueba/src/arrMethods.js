function foreach(object, callback) {
    if (Array.isArray(object)) {
        foreachArray(object, callback);
    } else {
        foreachObj(object, callback);
    }
}

function foreachArray(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i], i, arr)
    }
}


function foreachObj(obj, fn) {
    var array = Object.keys(obj);
    for (let i = 0; array.length > i; i++) {
        fn(array[i], obj[array[i]], i, obj)
    }
}

var map = function (object, callback) {
    if (Array.isArray(object)) {
        return mapArray(object, callback);
    } else {
        return mapObj(object, callback);
    }
}

var filter = function (arr, fn) {
    let newArr = [];
    foreach(arr, function (e) {
        if (fn(e)) {
            newArr.push(e)
        }
    })
    return newArr;
}

var reduce = function (object, callback, acc) {
    if (Array.isArray(object)) {
        return reduceArray(object, callback, acc);
    } else {
        return reduceObj(object, callback);
    }
}

function mapArray(arr, fn) {
    var newArr = [];
    foreach(arr, function (e, i, arr) {
        newArr[i] = fn(e, i, arr);
    })
    return newArr;
}

function mapObj(obj, fn) {
    var newArr = [];
    foreach(obj, function (key, val, i, obj) {
        newArr[i] = fn(key, val, i, obj);
    })
    return newArr;
}

function reduceObj(array, callback, acc) {
    foreach(array, function (e, i) {
        acc = callback(acc, e, array[e], i);
       
    })
    return acc;
}

function reduceArray(array, callback, acc) {
    foreach(array, function (e, i) {
        acc = callback(acc, e, i, array)
    })
    return acc;
}




module.exports =
    {
        foreach: foreach,
        map: map,
        filter: filter,
        reduce: reduce
    };






















// var modul = { };


// function foo () {} // function statement
// modul.bar = function () {}; // annonimous function expression
// modul.qux = function pepe () { pepe(); }; // named function expression

// foo() // ok
// bar() // ok
// pepe() // undeef