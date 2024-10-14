// Fat arrow function
/*
    El elemento arguments no existe dentro de las fat arrow function.
    Estas funciones no cuentan con la funcion super ni con el contecto de this.
*/

const sumar = (a, b) => {
    return Array.from(arguments).reduce((acc, el) => acc + el);
}
console.log(sumar(5, 3));