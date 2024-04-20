/*
    Atajos constructores
¿Qué son los atajos constructores en JavaScript?
Cuando nosotros definimos un objeto en JavaScript.
Ejemplo: 
Let nombre del objeto = {
	Resto del codigo
{;
Esto es un atajo de JavaScript para llamar al constructor de objetos. 

let objeto = {
   objeto.constructor 
};
Al hacer esto nos devuelve una función Object() esta es una función constructora que nos permite crear objetos. 
Todos los objetos que son creados en JavaScript tiene una propiedad llamada constructor que nos permite saber con que constructor fue creado nuestro objeto. 
Esta es otra forma de crear un objeto.
Ejemplo: 
Let objeto = new Object();

¿Cuáles son los otros constructores que tenemos dentro de JavaScript?
Los otros constructores son: 
1)	New array(i) esto va a crear un nuevo array.
2)	New string esto va a crear un nuevo string 
3)	New number que se lo puede declarar con un numero
4)	New booleans que va hacer true o false






¿Qué constructor tiene una función constructora?
Funtion objeto() {
	This.name = ‘Migue’; 
{; 
let user = new Usuario(); 
console.log(user.constructor);
el resultado de este código se ve asi porque nos está mostrando el código de la función pero si usamos alguno de los otros datos no lo veremos asi ya que los otros están implementados en código nativo.

Aclaraciones:
1)	Los string literales, los números literales y los booleanos literales se comportan distintos a los que fueron creados con estos constructores.  
2)	Ahora que sabemos que algunos valores se comportan de forma diferente en las funciones ya mencionadas siempre debemos usar los string literales para evitar errores. 
3)	En caso de tener que si o si crear los string con los constructores debemos usar el método valueof()
4)	El valueof() también se puede usar en los number y en los booleanos. 

*/

function Usuario() {
    this.name = 'Miguel'; 
};
let user = new Usuario();
console.log(user.constructor);

const s1 = '1 + 1';
const s2 = new String("1 + 1");
console.log(eval(s1), eval(s2)); 
console.log(s1.valueOf());