/**
 * Crea un algoritmo que tome un array de objetos y devuelva un array de pares
 */

/**
 * ¿Que son los pares?
 * los pares son arrays de arrays, cada uno de sus elementos son los identificadores. 
 * el siguiente valor es el objeto completo con sus propiedades y todo. 
 */

let array = [
    {
        id: 1,
        name: 'Miguel'
    },
    {
        id: 2,
        name: 'Juan'
    },
    {
        id: 3,
        name: 'Pedro'
    }, 
    {
        id: 4,
        name: 'Yazmin'
    }
];

let pares = [];

function paresDeArrays(array) {
    for (let i = 0; i < array.length; i++) {
        let elemento = array[i];
        pares.push([elemento.id, elemento]);
    }
    return pares;
}

let resultado = paresDeArrays(array);
console.log('Resultado', resultado);