/**
 * Crear un algoritmo que devuelva un array de objetos en base a pares.
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

function collection(array) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        let elemento = array[i];
        newArray.push([elemento.id, {name: elemento.name}]);
    }
    return newArray;
};

let resultado = collection(array);
console.log('El resultado es:', resultado);