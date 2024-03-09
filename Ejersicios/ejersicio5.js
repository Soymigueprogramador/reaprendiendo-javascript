/**
 * Crear un algoritmos que devuelva el numero
 * mayor y menor de un array. 
 */

let array = [ 2, 5, 7, 15, -5, -100, 55 ];

function getMenorMayor(array) {
    let menor = array[0];
    let mayor = array[0];
    for( numero of array ) {
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [ menor , mayor ];
};

let resultado = getMenorMayor(array);
console.log(resultado);

// Este ejersicio es parte de una entrevista tecnica. 