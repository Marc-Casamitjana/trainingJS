/**
 * Función que itera sobre un objeto 
 * @param {object} obj 
 * @param {function} fn
 * @description Add two numbers.
 * @returns {undefined} Nothing is returned
 */
function foreach(obj, fn) {
    var array = Object.keys(obj);
    for (let i = 0; array.length > i; i++) {
        fn(array[i], obj[array[i]], i, obj)
    }
}

obj = [{ key1: 'lorem', key2: 'ipsum', key3: 'dolor' }];

foreach(obj, function (key, value, i, arg) {
    console.log(i + ' = ' + value);
})

