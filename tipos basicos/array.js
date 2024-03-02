/*
    Array
¿Qué es un array?
El termino array viene del ingles y se lo conoce como colección o collection, en algunos casos también se les dice arreglos (un array o un arreglo se refiere a lo mismo). 

¿Cómo creamos un array en JavaScript?
Para crear un array o arreglo en JavaScript hacemos esto.
Ejemplo: 
Let nombre del array = [[;
A esto se lo conoce como un array literal y podemos dejarlo vacío o agregarle propiedades.
Ejemplo:
 Let familia = [
	Mama,
	Papa,
	Hermana1
	Hermano2,
[;
Console.log(familia);
Y en la consola del navegador se nos va a mostrar todas las propiedades que esten dentro del array, estos van a estar ordenado tal y como fueron creados, estos tendrán un numero ordenado y el primer elemento del array tendrá el 0 asi que en caso de querer iterar el primer elemento vamos a tener que pasarle el numero 0. 

¿Cómoacceder a un elemento dentro de un array?
Para iterar un elemento de un array hacemos esto.
Ejemplo:
Console.log(nombre del array[item al cual queremos acceder[);
En la consola del navegador vamos a poder ver ese item por separado del resto del array. 


¿Cómo agregar un item al array?
Para agregar un item a un arrar hacemos esto.
Ejemplo: 
Familia[numero de item nuevo[ = el nuevo valor de ese nuevo item;
Siempre debemos agregar un item teniendo en cuenta la lógica con la que fue creado el array. Es decir que si tenemos un array de 3 item el próximo item que agreguemos debería de tenber el numero 4 pero si agregamos un item con valor 10 nos va a mostrar que hay 7 espacios vacíos. 
Si tenemos un array de 3 item, agregamos otro item con un valor de 10 y en el medio nos quedan 7 espacios vacíos y queremos comprobarlo de esta manera.
Ejemplo:
Console.log(familia[5[);
En la consola nos va a mostrar que ese item es undefined. 

¿Cómo saber qué tipo de elemento es?
Para saber que tipo de array es hacemos esto.
Ejemplo:
Console.log(typeof nombre del array);
En la consola del navegador nos va a decir que este es un objeto y ya que este array se comporta como un objeto lo depremos iterar con:
Nombre del array.elejimos una de muchas opciones. 
*/

// Aplicando lo visto en clase de array.

//creando un array.
let familia = [
    "Mama",
    "Papa",
    "hermana1",
    "hermana2",
];
console.log(familia); 

// Revisando item por item.
console.log(familia[3]); 
console.log(familia[0]);
console.log(familia[6]);

// Agregando un item.
familia[4] = "Hermano";
familia[5] = "abuelo";
familia[6] = "";

// Quiero saber que tipo es.
console.log(typeof familia); 

// De que tamaño es mi array.
familia.length

// Eliminando item del array. 
delete familia[6]; // Se elimino el item numero 6
delete familia[5, 4];

familia.length