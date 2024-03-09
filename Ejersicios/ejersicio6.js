/**
 * Crea un algoritmo que devuelva el numero positivo de un array.
 */

let array = [ 2, 5, 7, 15, -5, -100, 55 ];

function numerosPositivos(array) {
    let numeroInicial = 0;
    for( numeroPOsitivo of array ) {
        if ( numeroPOsitivo > 0 ) {
            numeroPOsitivo++
        };
        return numeroPOsitivo;
    };
};

let  positivos = numerosPositivos(array);
console.log(positivos);