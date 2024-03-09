/**
 * Crear un algoritmo que devuelve elprecio de un producto mas impuestos.
 */

function precioFinal(precio, impuesto) {
    return precio + precio * impuesto;
};

let resultado = precioFinal(134.319, 0.21);
console.log(`El precio final del producto es: ${resultado}`);