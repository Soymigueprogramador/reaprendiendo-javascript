/*
    Al trabajar con arrays nos vamos a encontrar en algun momento con la necesidad de tener que unirlos para para crear una URL o algo mas.
    Esto lo podemos crear usando el metodo " join ".

    Para usar este metodo tenemos que escribir el nombre del array.join(indicar que separador vamos a usar)

*/

// Ejemplo 1:
let nombres = [ 'Miguel', 'Celeste', 'Araceli', 'Yazmin' ]
let mensaje = nombres.join(' ') //Indicamos un separador

// Ejemplo 2:
let saludo = 'Hola mundo desde Argentina'
let mostrar = saludo.split(" ") //Indicamos un separador




console.log(nombres, mensaje, saludo, mostrar.join('-/_'))