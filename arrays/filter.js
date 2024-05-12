/*
    Con el metodo " filter() " vamos a poder filtrar un array o un objeto,
    tambien vamos a poder filtrar y eliminar datos innecesarios.

    para hacer esto hacemos lo siguiente:
    1) Creamos un array o un objeto
    2) nombreDelObjeto.filter(funcion, indice, objetoArray)
        eL METODO DE FILTER RECIBE UNA FUNCION QUE A SU VEZ RECIBE
        EL ELEMENTO QUE ESTAMOS ITERANDO,
        eL INDICE DEL ELEMENTO QUE ESTAMOS ITERANDO,
        y el array o el objeto completo
*/

let arrayDeGenteQueYaNoVeo = [
    { edad: 31, nombre: 'Miguel' },
    { edad: 28, nombre: 'Araceli' },
    { edad: 24, nombre: 'Celeste' },
    { edad: 21, nombre: 'Yazmin' },
]

let filtrar = arrayDeGenteQueYaNoVeo.filter(arrayDeGenteQueYaNoVeo => arrayDeGenteQueYaNoVeo.edad < 23)
console.log(filtrar)

console.log(arrayDeGenteQueYaNoVeo)