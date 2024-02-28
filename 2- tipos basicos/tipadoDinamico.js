/*
    Tipado dinámico
Tipos de lenguajes: 
Dentro del mundo de la programación tenemos dos tipos de lenguajes
1)	Tipado estático: 
Dentro de este grupo de lenguajes tenemos a: 
A)	Java
B)	C
C)	C++
D)	C#
E)	Swift
F)	Kotlin
Entre otros.
2)	Tipado dinámico
Dentro de este grupo de lenguajes tenemos a: 
A)	JavaScript 
B)	Python
C)	Ruby 
D)	PHP
Entre otros.

¿Cuáles son las diferencias entre un lenguaje de tipado estético y uno de tipado dinámico?
En un lenguaje de tipado estatico como lo es java, a la hora de definir una variable y un valor esta ya queda definida y no se puede cambiar el valor de la misma en otro momento.
Ejemplo:
String nombre ‘hola’;
Nombre = ‘pepe’;
Al querer hacer esto en un lenguaje de tipado estético me tiraría un error ya que el valor de una variable ni puede ser cambiado. 
Mientras que en un lenguaje de tipado dinamico cuando creamos una variable le podemos asignar un valor determinado y después se lo podemos cambiar cuando queramos y cuantas veces queramos. 
Ejemplo:
Let Nombre = ‘lola’;
Nombre = ‘pepe’;
En un lenguaje de tipado dinámico esto no me arrojaría ningún error.

¿Cómo puedo saber qué tipo de dato tiene como valor una variable?
Para saber que tipo de dato es el valor que se esta usando para una variable, lo podemos saber usando la palabra reservada “typeof”
Ejemplo:
Let nombre = ‘miguel’;
Console.log(typeof nombre);
Esto nos debería mostrar en la consola del navegador que el tipo de dato es un string. 

¿Por qué me sale object cuando defino un null en la consola del bavegador?
Esto tiene varias explicaciones como: 
1)	Porque asi es como fue implementado. 
2)	En los comienzos de javascript se utilizaba una etiqueta con un valor para mostrar los tipos de datos, en el caso de null el valor era de 0 y entonces se implemento que cuando alguien indique que una variable o constante es con un valor de null se lo muestre como object en lugar de 0 
A ecma se lo presento una solución para modificar esto pero ecma la rechazo. 
En este caso lo que se hizo fue pensar a object como null ya que este representaría a un objeto vacío.
*/

// Aplicando los ejemplos.

let nombre = 'miguel';
let edad = 31;
let estudiante = true;
let trabajoEn = undefined;
let estadoCivil = null; 

console.log(typeof nombre); 
console.log(typeof edad);
console.log(typeof estudiante);
console.log(typeof trabajoEn);
console.log(typeof estadoCivil);