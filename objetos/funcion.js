/*
    Función
¿Qué es una funcion?
En JavaScript tenemos un constructor llamado funciones que nos permite reutilizar código. 
Ejemplo: 
Funtion nombreDeLaFunchin(argumentos) {
	Resto del código;
{;
Const nombredelavariable = new nombre(argumentos);
Console.log(nombredelavariable);

¿Cómo es el método call de las funciones?
Para poder utilizar el método coll de las funciones hacemos esto.
Ejemplos: 
Nombre de la función.call({{, );
Argumentos a pasarles:
1)	Argumento de contectos de this. 
2)	Argumentos de la función call. 
Nombre de la función.apply({{, [[ );


¿Qué hace el método call de las funciones?
Cuando usamos el método call de una función lo que hacemos es que tome el valor de la primer variable y this va a tomar el lugar de la función que tiene el .call. 
Este nos sirve para extender objetos y funciones. 


Aclaraciones: 
1)	Si bien existe código ya existengo escrito con funciones constructoras, no debemos usarlas. 
2)	La función de call nos permite llamar a las funciones y pasarles el contexto de this y así aumentar los objetos que les estamos pasando. 
3)	También tenemos el método apply() que hace lo mismo que call solo que en este caso se lo tenemos que pasar como un array. 
4)	Las funciones pueden ser creadas con el constructor de función, pero esto no debemos usarlo y siempre es mejor que nosotros definamos las funciones. 
5)	Existen métodos como call() y apply() que nos permiten extender objetos que ya esten definidos.
Diferencias:
A)	En el método call() los argumentos se pasan uno a uno.
B)	En el método apply se argumentos se pasan como array.

*/
//Funcion.
function Punto(x, y) {
    this.x = x;
        this.y = y;
        this.Dibujar = function() {
            console.log('Dibujando...!');
        };
};


//Funcion constructora este tipo de funciones no debemos usarlo.
/* const punto2 = new function(x, y) {
    this.x = x;
    this.y = y;
    this.Dibujar = function() {
        console.log('Dibujando...!');
    };
};
const p = new Punto(1, 2);
console.log(p); */ 

//Metodo call de las funciones. 
let punto = { z: 7 };
Punto.call(punto, 1, 2); 
console.log(punto);

//Metodo apply de las funciones.
//let punto = { z: 7 };
Punto.apply(punto, [ 1, 2 ]); 
console.log(punto);