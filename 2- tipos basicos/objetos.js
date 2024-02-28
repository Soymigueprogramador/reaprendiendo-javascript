/*
    Objetos
¿Qué son los objetos en JavaScript? 
Los objetos en JavaScript son datos de referencia, es decir que estos se guardan en la momeria como una referencia de donde deverian de estar. 
Los objetos son una agrupación de datos que tienen sentido entre sí, 
Ejemplo:
Let nombre = ‘homero’;
Let anime = ‘the simpsons’;
Let edad = 39;
Ahora vamos a crear un objeto con estos datos.
Let personaje = {{; 
Console.log(personaje);
En la console del navegador me va a mostrar que este es un objeto vacío. Pero si hacemos esto.
 Let personaje = {
	Nombre: ‘homero’,
	Anime: ‘the simpsons’,
	Edad: 39, 
{;
Console.log(personaje);
En la consola del navegador vamos a poder ver el objeto con sus propiedades.

¿Cómo crear una propiedad de un objeto?
Para crear una nueva propiedad dentro de un objeto como este, tenemos estas opciones.
Ejemplo: 
Let personaje = {
	Nombre: ‘homero’,
	Anime: ‘the simpsons’,
	Edad: 39, 
{;
Nombre del objeto. Nueva propiedad = nuevo valor // opción 1
Nombre del objeto[‘Nueva propiedad’[ = nuevo valor // opción 2
En la consola del navegador se debería de mostrar el objeto con las nuevas propiedades

¿Cómo acceder a las propiedades de un objeto?
Si tenemos un objeto como este: 
Ejemplo: 
Let personaje = {
	Nombre: ‘homero’,
	Anime: ‘the simpsons’,
	Edad: 39, 
{;
Console.log(personaje .seleccionamos la propiedad que queremos acceder);
Esto nos mostrara por separado la propiedad seleccionada. 
Otra forma de acceder es con la notación de conchetes [[.
Ejemplo: 
Let personaje = {
	Nombre: ‘homero’,
	Anime: ‘the simpsons’,
	Edad: 39, 
{;
Console.log(personaje [seleccionamos la propiedad a la que queremos acceder[)
Esto nos mostrara por separado la propiedad seleccionada. 

¿Cómo modificar la propiedad de un objeto?
Para modificar la propiedad de un objeto como este podemos hacerlo asi.
Ejemplo: 
Let personaje = {
	Nombre: ‘homero’,
	Anime: ‘the simpsons’,
	Edad: 39, 
{;
Para modificar la propiedad tenemos estas opciones: 
1)	Perdonsaje.la propiedad a modifivas = el nuevo valor de dicha propiedad.
2)	Perdonsaje[‘la propiedad a modifivas’[ = el nuevo valor de dicha propiedad.

¿Qué opción es mejor?
1)	Si conoces que propiedad quieres modificar mejor usa la opción 2.
2)	Si no conoces que propiedades tiene el objeto o queres iterrar todas las propiedades mejor usa la opción 1.

¿Cómo eliminar una propiedad de un objeto?
Para eliminar una propiedad de un objeto como este podemos hacer esto. 
Let personaje = {
	Nombre: ‘homero’,
	Anime: ‘the simpsons’,
	Edad: 39, 
{;
Delete nombre del objeto.nombre de la propiedad a eliminar
Console.log(nombre del objeto);
En el navegador debería de mostrarse el objeto con la propiedad ya eliminada

Aclaraciones: 
1)	A los datos que están dentro de un objeto se los llama “llave, clave y valor”.
2)	En la última línea dentro del objeto, la coma es opcional, pero recomiendo que por mas que esa línea sea la ultima aun asi usemos la coma. 
3)	Si al querer ver las propiedades del objeto en la consola del navegador, esta no se muestra ordenada debemos saber que JavaScript no respeta el orden de las mismas. 

*/

// Aplicando los ejemplos. 
let personaje = {
    nombre: 'homero',
    anime: 'the simpsons',
    edad: 39, 
};
console.log(personaje);

// Modificando una propiedad.
personaje.edad = 40; // Opción 1
personaje['nombre'] = 'homero J';  //Opción 2

// aGREGANDO UNA PROPUEDAD AL OBJETO.
personaje.CIUDAD = 'Springfield'; //Opcion 1
personaje['esposa'] =  'Marge Simpson'; //Opcion 2
personaje['esposa2'] =  'Mama de las vegas';
personaje['profecion'] =  'tecnico nuclear';

// Eliminando una propiedad del objeto.
delete personaje.esposa2; //Opcion 1
delete personaje['profecion']; //Opcion 2