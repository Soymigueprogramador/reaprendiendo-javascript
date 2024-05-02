/*
    Combinando arrays:
    Para que podamos combinar dos arrays vamos a usar este metodo "concat()".
    Este se utiliza a partir del nombre del primer array y el nombre del segundo array se pone como argumento.
    esto no medifica los valores de los arrays que queremos combinar, en su lugar cra un nuevo array con la combinacion de ambos arrays.
    si queremos combinar 2 o mas array usamos el mismo metodo.

    Dividiendo arrays: 
    Para dividir un array en dos partes, podemos usar el metodo "slice()".
    Este se utiliza a partir del nombre del array y los indices de donde queremos dividir el array.
*/

let array1 = [1, 2]
let array2 = [3, 4] 

// Combinando arrays.
let combo = array1.concat(array2)
console.log(combo)

// Combinando 2 o mas arrays, 
let nuevoArray1 = [1, 2]
let nuevoArray2 = [3, 4]
let nuevoArray3 = [5, 6]
let nuevoArray4 = [7, 8]
let nuevoArray5 = [9, 0]
let combinados = nuevoArray1.concat(nuevoArray2, nuevoArray3, nuevoArray4, nuevoArray5)
console.log(combinados)

// Dividiendo arrays. 
let arrayDividido = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, ]
let array1Dividido = arrayDividido.slice(0, 4)
let array2Dividido = arrayDividido.slice(4, 9)

console.log(array1Dividido)
console.log(array2Dividido)