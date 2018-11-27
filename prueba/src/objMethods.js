const arrMethods = require('./arrMethods.js');

function every(original, fn) {      //itera sobre un objeto y solo devolverá true en caso que la callback sea siempre true
    let result = 0;
    arrMethods.foreach(original, function (key, value) {
        if (!fn(key, value)) {
            result += 1;
        }
    });
    return result > 0 ? false : true;
}

function areEquals(first, second) { //comprueba si dos objetos son iguales sin importar el orden de las propiedades
    if ((Object.prototype.toString.call(second) || Object.prototype.toString.call(first)) !== '[object Object]') {
        throw new Error('not an object');
    }
    if (Object.keys(first).length !== Object.keys(second).length) {
        return false;
    }
    let result = every(first, function (key, value) {
        return second[key] === value;
    })
    return result;
}

function includesObject(array, obj) { //comprueba si en un array existe el objeto que le pasamos.

    var result = 0;
    if (array.length === 0 || !Array.isArray(array)) { return false; };  //array vacío o no-array return false
    arrMethods.foreach(array, function (e) {
        if (areEquals(obj, e)) { //si encuentra coincidencia entre el objeto que se quiere comprobar y el elemento actual del array, devuelve true y lo considera como incluido.
            result = 1;
        }
    });
    return result === 1 ? true : false;
}

function removeDuplicates(params) { // comprueba si en una array de objetos existen objetos duplicados, en cuyo caso los elimina y devuelve el array.
    var result = [];
    arrMethods.foreach(params, function (e) {
        if (!includesObject(result, e)) {
            result.push(e);
        }
    });
    return result;
}
//filtra un objecto por propiedades a partir de otro objeto con las propiedades a filtrar

function isMatch(object, source) {  // comprueba si en un objeto (object) existen ciertas propiedades (source)
    let ocurrences = 0;
    let keys = Object.keys(source);
    arrMethods.foreach(object, function (key) {
        if (object[key] === source[key]) {
            ocurrences++;
        }
    })
    return ocurrences === keys.length;
}

module.exports = {
    areEquals: areEquals,
    includesObject: includesObject,
    removeDuplicates: removeDuplicates,
    every: every,
    isMatch: isMatch
};

let obj1 = {
    x: 1,
    y: 2,
};
let obj2 = {
    y: 2,
    x: 1
};
let obj3 = { x: 2 }; let obj4 = { x: 1 };

let cosa = removeDuplicates([obj1, obj2])

// console.log(cosa);

