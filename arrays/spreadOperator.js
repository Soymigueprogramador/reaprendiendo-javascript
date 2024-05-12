/*
    El operador " spread operator " nos va a permitir combinar varios arrays de una forma mas simple y facil de leer.
    Esto es una nueva funcionalidad de ES6 2015.

    Cuando usamos el operador antes mencionado nos encontramos con un codigo mas flexible y mas facil de leet.
    Creamos 3 arrays, para poder combinarlos tenemos que usar el " [...nombresDeLosAraays] ", al comprobarlo en la consola podemos ver losarrays combinados.

    Otra de las ventajas de usar este operador es que tambien nos permite crear copias de los arrays.
    Para crear dichas copias debemos definir otro array u adjuntarle el nombre del array a copiar
    let array4 = [...arra3]

*/

let array1 = [1, 2]
let array2 = [5, 6]

let array3 = [0, ...array1, 4,  ...array2, 7 , 8] 
let array4 = [...array3]
array3.pop()

console.log(array3, array4)