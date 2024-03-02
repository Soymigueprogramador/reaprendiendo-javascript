/*
    Reglas para nombrar variables
Debemos saber que: 
Tenemos que tener en cuenta que hay reglas para crear variables. Hay algunas que vamos usar en la industria IT y hay otras que directamente no están permitidas por el lenguaje de programación que estemos usando. 
 
Reglas de nombres para las variables dentro de un lenguaje:
1)	No pueden comenzar con números ya que si o si tienen que empezar con letras o también pueden empezar con un guion bajo. 
A)	Let 1nombre = ‘miguel’; (esto no se puede).
B)	Let nombre1 = ‘miguel’; o también let _nombre = ‘miguel’; (esto si se puede).
2)	Las variables no pueden tener el mismo nombre que las palabras reservadas para su definición. 
A)	Let let = ‘miguel’; (esto no se puede). 
B)	Let nombre = ‘miguel’; (esto si se puede). 

Reglas de nombres para las variables dentro dela industria IT:
1)	Para nombrar a las variables se recomienda seguir estas convenciones que son como unas reglas estándar. 
A)	UpperCamelCase (todas las palabras empiezan con mayuscula).
B)	camelCase (desde la segunda palabra en adelante empiezan con mayuscula).
C)	snake_case (todas las palabras están separadas por un guion bajo).

Ejemplo de nombres de variables con estas convenciones: 
1)	let NmbreCompleto = ‘miguel’; 
2)	let nombreCompleto = ‘miguel’;
3)	let nombre_completo = ‘miguel’;

aclaraciones: 
1)	JavaScript es sensity case es decir que tiene la capacidad de reconocer y diferenciar las mayúsculas y las minúsculas.
2)	Si bien en internet se puede encontrar cualquiera de las 3 convenciones antes mencionadas tenemos que entender que “amelCase” es la convención mas utilizada en la industria. 
3)	Los nombres de nuestras variables deben tener sentido, no poner cualquier cosa como nombre de una variable.
4)	Ya sabemos que para crear una variable debemos usar la palabra reservada let pero en caso de que queramos cambiar el nombre de una variable ya existente solo debemos poner el nombre de la misma, el sigo igual y el valor que esta va a tener apartir de ese momento. 
5)	Podemos crear dos variables dentro de una misma línea haciendolo de la siguiente manera “let nombre, apellido = ‘pepe argento’;” pero lo mas recomendables es que creemos una variable en cada línea. 

*/ 

// Aplicando los ejemplos.

// Nombres de variables con convenciones. 
let NombreCompleto = 'Miguel'; // UpperCamelCase
let nombreCompleto = 'Juan';   // camelCase
let nombre_completo = 'Pedro'; // snake_case

//  Mostrando los resultados.
console.log(NombreCompleto);
console.log(nombreCompleto);
console.log(nombre_completo);

// Aplicando los ejemplos de cambio de valores de las variables
NombreCompleto = "María";
nombreCompleto = 'pepe'; 
nombre_completo = 'ana';

// Mostrando los nuevos resultados.
console.log(NombreCompleto);
console.log(nombreCompleto);
console.log(nombre_completo);

// Aplicando el ejemplo de creacion de dos variables en una misma linea. 

let cosasRaras, cosasLocas = 'en js';
console.log(cosasRaras + ' ' + cosasLocas); // El lenguahe se vuelve loco y me lanza un undefined en lugar de los nombres de las variables asi que esto no se hace.