/*
    El metodo ".reduce()" nos permite reducir todos los elementos que estan dentro de un array.
    el metodo recibe dos parametros:
    1) es un acomulador y un valor inicial.
    2) es el elemento que nosotros estamos iterando.

    El metodo tambien nos sirve por si quetemos que iterrar un array que tiene otros array dentro,
    esto nos permite aplanar el array y que quede uniforme.

    En caso de que tengamos que iterar un array que sea demaciado grando,
    en lugar de usar el metodo find podemos crear un indice y asi poder crearlo con la
    clase map p creando un objeto. 

*/

let numeros = [ 1, 2, 3, 4 ] 

const suma = numeros.reduce((acc, el) => {
    return acc + el;
}, 0) 

console.log(suma)

let anidados = [[ 1, 2 ], 3, [ 4, 5 ]]

let plano = anidados.reduce((acc, el) => {
    return acc.concat(el)
}, [])    

console.log(plano)

// Esto nos va a servir si tenemos que trabajar con un array demaciado grande o con muchos elementos.
const usuarios = [
    { nombre: 'Miguel', edad: 31 },
    { nombre: 'Araceli', edad: 28 },
    { nombre: 'Celeste', edad: 24 },
    { nombre: 'Yazmin', edad: 21 },
]

const indexsados = usuarios.reduce(( acc, el ) => ({
    ...acc, [ el.nombre ]: el,
}), {})

console.log(usuarios,  indexsados)