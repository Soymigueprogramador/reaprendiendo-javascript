/**
 * Crea un array de logitud n, y que sus elementos sean numeros dedesde el 1 hasta n.
 */

let logitud = 7; 

function crearAray(n) {
    if( n <= 0 ) {
        return [];
    };
    let arr = [];
    for( let i = 0; i < n; i++ ) {
        arr[i] = i + 1;
    };
    return arr;
};

let resultado = crearAray(logitud);
console.log("El arreglo es:" ,resultado); 