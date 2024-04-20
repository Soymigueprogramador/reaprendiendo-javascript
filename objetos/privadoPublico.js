/*
    Privado vs publico
¿qué es privado vs público?
Cuando estamos creando objetos vamos a tener que usar métodos que sean privados para que no se puedan modificar por fuera del mismo objeto. 

Publico:
Ejemplo: 
Function nombre() {
	This.name = ‘nombre’;
	This.nombreNuevaFunction = function() {
		Resto del codigo
{;
This.nombreNuevaFunction = function() {
		Resto del codigo
{;
{;
nombreDelObjeto.nombreNuevaFunction = function() {
	Resto del código modificado
{;
nombreDelOBjeto.nombreDeFunction();
el comportamiento que nos devuelve este código nosotros no lo queremos. 
Para evitar este problema hacemos esto.

Privado:
Ejemplo: 
Function nombre() {
	Let id = 1;
This.name = ‘nombre’;
	
let nombreNuevaFunction = function() {
		Resto del codigo
{;
This.nombreNuevaFunction = function() {
		Resto del codigo
{;
{;
nombreDelOBjeto.nombreDeFunction();

Aclaraciones:
1)	Todo lo que nosotros asignemos a la palabra reservada de “THIS” va hacer parte del método público,
Esto se asigna así: “nombreDelObjeto.this”
2)	Todas las variables y constantes de que sedinen dentro de los objetos son de método privado y no se pueden modificar desde afuera del objeto. 

*/

// Metodo publico.
function Usuario() {
    let id = 1;
    this.nombre = "Miguel";
    
    let log = function() {
        console.log('Login...!')
    };
    
    this.guardar= function() {
        log();
        console.log('usuario guardado...!')
    };
};

const usuario = new Usuario();


usuario.guardar()