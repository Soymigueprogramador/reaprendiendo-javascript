// rest
/*
    Con el operador rest cuando tenemos solo 2 argumentos en una funcion y el resto de los elementos que se pasaron en el llamado de la misma
    seran puestos dentro de un array que se crea para guardar esos elementos y que no queden sueltos.
    Debemos tener en cuenta que '...rest' siempre tiene que ser el ultimo argumento o de lo contrario dara error.
*/

function suma(a, b, ...rest) {
    console.log(rest)
};

console.log(suma(1, 2, 3, 4));

// Imprimiendo mensajes de error con rest.
/*
    Este tipo de codigos los podemos usar cuando queramos imprimir mensajes de error y luego saber de donde vienen.
*/

// Ejemplo:
const logMsg = (desc, ...msgs) => {
    for (let msg of msgs) {
        console.log(desc, msg);
    }
};

//logMsg('servidor:', 'Error 1', 'Peticion aceptada', 'socket activo');

const mensajesError = ['Error 1', 'Peticion aceptada', 'socket activo']; 
logMsg('Cliente mobile:', ...mensajesError, 'Error 2');

// Todo lo visto en este archivo funciona tanto con las 'fat arrow function' como con las funciones normales.