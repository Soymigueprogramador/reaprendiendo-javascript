/* 
    Nos vamos a encontrar con la necesidad de ordenas un array,
    para hacerlo hacemos esto:
    Ordenando un array de numeros de mayor a menos:
    1) Creamos un array
    2) nombreDelArray.sort()

    Ordenando un array de numeros de menos a mayor
    1) Creamos un array
    2) nombreDelArray.reverse()

    Estos metodos tambien sirven para cuando queremos usarlos en arrays con otros caracteres como las letras.

    Cuando usamos el metodo " sort() " nos encontramos con el problema, 
    en la informatica cada vez que se escribe un caracter a este se le asigna un numero el cual va hacer utilizado 
    por el sistema operativo o el lenguaje de programacion que estes usando para despues poder referenciarlo.
    Si te aparece este problema podes solucionarlo de esta manera. 
    Tenemos que pasarle una funcion para correjir este problema,
    en caso de trabajar con un array de letras como este
    " [ 'a', 'C', 'b' ] ", 
    si queremos que a aparesca al principio vamos a tener que
    return -1
    si queremos que b este al principio tenemos que
    return 1
    si queremos que sean iguales tenemos que 
    return 0
    despues usamos un if para consultar los valores de estas variables y problema solucionado
    esto tambien se puede usar en un objeto.
 */
// De mayor a menor.
let arrayMayorMenor = [ 20, 50, 10, -20 ]
arrayMayorMenor.sort()

// De menor a mayor. 
let arrayMenorMayor = [ 20, 50, 10, -20 ]
arrayMenorMayor.reverse()

//Probando con arrays de letras.
let letras1 = [ 'a', 'c', 'b' ]
letras1.sort()
let letras2 = [ 'a', 'c', 'b' ]
letras2.reverse()

let conMayuscula = [ 'a', 'C', 'b' ]
conMayuscula.sort((a, b ) => {
    let alower = a.toLowerCase()
    let blower = b.toLowerCase()
    if (alower < blower) {
        return -1
    }
    if (alower > blower) {
        return 1
    }
    return 0
})

//Practicando con un objeto. 
let gente = [
    { edad: 31, nombre: 'Miguel' },
    { edad: 21, nombre: 'Yazmin' },
    { edad: 24, nombre: 'Celeste' },
]
gente.sort((a, b) => {
    //Tambien podemos hacer los if en una misma linea y asi ahorramos espacio.
    if (a.edad < b.edad) {return -1}
    if (a.edad > b.edad) {return 1}
    return 0
})

console.log(arrayMayorMenor, arrayMenorMayor, letras1, letras2, conMayuscula, gente)