/*
    En algun momento vamos a tener que verificar si nuestra array tiene todos los elementos cumpliendo con lo requerido o si hay alguno cumpliendo con lo requerido,
    para ello tenemos dos formas de hacerlo:
    1) Creamos un array de usuarios.
    2) usamos el metod ".everu(conUnaFuncionQueRegresaTrueOfALSE)"
    3) El metodo ".every()" se va a ejecutar hasta encontrar un valor de false
    4)  El metodo ".some()" se va a ejecutar hasta encontrar un valor de true
*/

let usuarios = [
    { id: 1, activo: false },
    { id: 2, activo: false },
    { id: 3, activo: true },
]

//Metodos:
//Este metodo de every se va a ejecutar hasta encontrar un valor de false.
/*
    let todosActivos = usuarios.every(u => {
    console.log('Todos activos', u.id)
    return u.activo
})
*/
//El metodo some() se va a ejecutar hasta encontrar un valor de true. 
let algunoActivo = usuarios.some(u => {
    console.log('Alguno activo', u.id)
    return u.activo
})
console.log(algunoActivo)