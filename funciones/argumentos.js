// Arguments
/*
    Si tenemos una funcion en las que solo tenemos 2 argumentos como a, b y en el llamado de la misma se le pasan mas elementos solo va a utilizar los
    argumentos mencionados en los parametros de la funcion. El resto de los elementos no seran tomados en cuenta.

*/

// Ejemplo
function suma(a, b) {
    // Esta es una forma mas moderna y mas corta de hacerlo.
    return Array.from(arguments)
        .reduce((acc, el) => acc + el);
    
    // Esta forma es un tanto vieja
    /*let total = 0;
    for ( let valor of arguments ) {
        total += valor;
    };
    return total;*/
};

console.log(suma(1, 2, 3, 4, 5)); 