/*
    Valor y referencia
 Repaso primitivos y valores de referencia:
Valores primitivos:
Los valores primitivos son: 
1)	String = ‘Miguel’
2)	Number  = 123456789
3)	Booleanos = true o false
4)	Null = valor nulo
5)	Undefined = no definido
Valores de referencia:
Los valores de referencia son: 
1)	Funciones 
2)	Objetos
3)	Clases 
4)	Arrays

¿Cuál es la diferencia entre primitivos y referencia?
Los datos primitivos son los que se guardan en memoria como las variables o las constantes.
Let nombre = ‘miguel’;
Const estadoCivil = soltero;
Los valores de referencia son aquellos en los que solo se guarda una referencia de donde podrían estar realmente en memoria. 
Const array = [1, 2, 3[;
Función saludas() {
	Console.log(Hola);
{;

¿Dónde se guardan los datos primitivos y los datos de referencia?
Los datos primitivos como una variable se guardan en memoria directamente. 
Los datos de referencia se guardan en memoria, pero al momento de ir a buscarlos solo vamos a recibir una referencia de donde se guarda el objeto en si mismo. 

Aclaraciones: 
1)	Los datos primitivos se copian cuando se asignan a otras variables.
2)	Los datos de referencia cuando los asignamos a una objeto se crea una referencia del mismo.  

*/

/* let a = [];
let b = a;
b.prop = 5;
console.log( a, b ); */

/* let a = 1;
function sumar(n) {
    n++;
};
sumar(a);
console.log(a); */

/* let a = { prop: 1 };
function suma(n) {
    n.prop++;
};
suma(s);
console.log(a);  */