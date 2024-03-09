/**
 * Indice validad que el elemento no sea moner a 0 y que el elemento exista en el array.
 */

function getByIdx(arr, idx) {
    if ( idx < 0 || arr.length <= idx ) {
        return 'Valor inexistente';
    }
    return arr[idx];
};

let resultado = getByIdx([ 1, 2], 1);
console.log("Resultado:", resultado);