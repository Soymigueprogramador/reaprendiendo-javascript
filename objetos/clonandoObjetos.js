/*
    Clonando objetos
¿Como clonar un objeto?
Para clonar un objeto hacemos esto.
Ejemplo: 
Let nombreVariable = Object.assign({{, nombreObjetoClonado);
Console.log( nombreObjeto, nombreObjetoClonado );
Otra forma de copiar un objeto es:
Let nombreVariable = Object.assign( {{, nombreObjeto );
Console.log( nombreObjeto, nombreCariable );
Let nombreVariable = {{;
For ( let llave in nombreObjeto ) {
	nombreVariable[llave[ = nombreObjeto[llave[
{;
Console.log( nombreVariable );
Debemos aclarar ue esta forma de copiar objetos es un tanto vieja. 
Otra forma de copiar un objeto es:
Let nombreVariable = { …nombreObjeto {;
Console.log( nombreVariable );

¿Cómo clonar las propiedades de un objeto?
Para clonar las propiedades que están dentro de un objeto hacemos esto. 
Ejemplo: 
Creamos un objeto literal.
Con el método Object.assign(); este método nos permite asignar propiedades de la derecha a objetos ue están a la izquierda. 

¿Cómo agregarle más propiedades a un objeto?
Para agregarle mas propiedades y valores al objeto hacemos esto.
Ejemplos: 
Object.assign(nombreDelObjeto, { propiedad: valor {);

¿Cómo tener una referencia de un objeto?
Debemos aclarar que estamos tomando una referencia del objeto y no lo estamos clonando. 
Para tomar la referencia del objeto hacemos esto.
Ejemplo: 
Let nombreVariable = Object.assign(nombreObjetoClonado);
Console.log( nombreVariable );

*/

const probando = {
    x: 10,
    y: 30,
}; 

//Agregando propiedad y valor.
Object.assign(probando, { z: 5 });

//Clonando un objeto.
//let clonProbando = Object.assign( {}, probando ); 
//let copia = { ...probando };
let copia1 = {};
for( let llave in probando ) {
    copia1[ llave ] = probando[ llave ];
};  

//Obteniendo una referencia.
let referencia = Object.assign({}, copia1);

//Haciendo los llamados.
//console.log(probando, clonProbando);
//console.log(referencia);
//console.log(copia1);