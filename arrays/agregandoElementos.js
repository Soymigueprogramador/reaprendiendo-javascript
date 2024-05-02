/*
    debemos recordar que cuando definimos algo con const esta no nos permite reasignarle un valor pero si nos permite agregarle un valor nuevo a esa constante.
    los arrays los diferenciamos con []
    como le agregamos elementos a un array.
    para abregarle elementos solo tenemos que escribir el nombre del array.elNombreDelMentodoQueVamosAUSAR.

    estos son los metodos mas usados:
    1) push() (Esto nos agrega un elemento al final del array)
    2) unshift() (Esto nos agrega un elemento al comienzo del array)
    3) pop()
    4) shift()
    5( splice()
    6) slice() (Esto nos permite agregar un elemento en un lugar determinado por el desarrollador, solo tenemos que indicarle el lugar donde se debe agregar mediante el indice del mismo.)
    7) indexOf()
    8) includes()
    */

const letras = [ 'a', 'b' ]
//Agregar al final.
letras.push('c', 5, 'HOLA')

//Agregar al comienzo.
letras.unshift('x', 'y', '1')

//Agregando un elemento en un lugar determinado del array.
letras.splice(2, 0, 'u', 5, 0, 'w')


console.log(letras)