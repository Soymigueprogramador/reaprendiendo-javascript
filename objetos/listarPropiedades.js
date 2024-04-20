/*
    Listar propiedades
¿Cómo listar propiedades?
JavaScript es un lenguaje dinamico, nosotros podemos aregar, modificar o eliminar propiedades fácilmente. 
Para listar propiedades que fueron creadas dinámicamente hacemos esto.
Ejemplo: 
Const prueba = {
	x = 10;
y = 10; 
dibujar() {
	console.log(‘Viva la libertad carajo!!!’);
{;
{;
Los métodos dentro de un objeto se pueden definir asi, le quitamos los : y la palabra reservada función. Esto funciona de la misma manera.  

¿Cómo saber si una propiedad o método está dentro de un objeto?
Para saber si una propiedad esta dentro de un objeto hacemos esto.
Listando las propiedades.
Ejemplo: 
If( ‘nombre de la propiedad’ in nombre del objeto  ) {
	Nombre del objeto.nombre de la propiedad(); 
{;
Con el if y dentro del mismo ponemos in podemos ver si un objeto tiene un método en particular. 
Listando los valores.
Ejemplo: 




Opciones para hacer esto:
1)	Let nombreDeUnaVariable = Object.keys(nombreDelObjecto);
Console.log(nombreDeUnaVariable);
2)	Console.loh(Object.keys(nombreDelObjecto));
Con esto vamos a poder listas todos los valores de un objeto.

¿Cómo listar todas las propiedades y sus valores de una ves?
Para listar todo de una ves hacemos esto: 
Ejemplo: 
for( let llave of Object.keys(prueba) ) {
    console.log(llave, prueba[llave]);
};
Esto nos muestra todos los valores y propiedades que están dentro de nuestro objeto. 

¿Cómo saber las propiedades de un objeto?
Para conocer las propiedades de un objeto desconocido hacemos esto.
Ejemplo:
for( let entry of Object.entries(prueba) ) {
    console.log(entry);
};
Esto nos muestra las propiedades de un objeto desconocido.
Esta es una nueva forma de hacer lo mismo que esta mas arriba. 

Aclaraciones: 
1)	Hasta ahora vimos que los construcores tienen métodos. 
2)	Cuando un constructor de JavaScript tiene métodos se lo conoce como métodos de clases o métodos estáticos. 
3)	Los métodos de Object como keys y entries y estos son métodos estáticos. 

*/

const prueba = {
    x: 10,
    y: 50,
    dibujar() {
        console.log('Viva la libertad carajo!!!')
    }
};
//delete prueba.dibujar;
console.log(prueba);

//Preguntamos si una propiedad o valor esta dentro de un objeto.
if( 'dibujar' in prueba ) {
    prueba.dibujar();
};

//console.log(Object.keys(prueba));
for( let llave of Object.keys(prueba) ) {
    console.log(llave, prueba[llave]);
};
for( let entry of Object.entries(prueba) ) {
    console.log(entry);
};