/* 
    cuando queriamos definir una funcion teniamos que usar la palabra reservada "function". 
    pero ahora podemos definir una funcion de la siguiente manera:
    podemos definirla tanto con let como con const, al ser una funcion lo mejor seria usar const.
    nombre de dicha funcion
    las fat arrow functions son funciones anonimas y se escriben asi: 
    = () => {}
    al ser una funcion anonima si o si debemos asignarcela a una variable o constante de la siguiente manera:
    const resultado = nombreDeLaFunction() 

    las fat arrow function tienen una funcionalidad determinada. 

    Con ambas opciones se llega a un mismo resultado solo que en la segunda opcion es mas corta. 
    Sy ka funcion tiene una sola linea podemos usar la la segunda opcion, pero si la funcione tiene las de una linea si o si vamos a tener que usar la pripera opcoon. 

    Debemos de recordar que si necesitamos crear una fat arrow function que tenga mas de un argumento deberiamos de usar la opcion 1, 
    pero si la fat arrow function tiene un solo argumento o directamente no lo tiene podriamos usar la opcion 2. 
*/

// Fat arrow function.
// Opcion 1.
const saludar = () => {
    return 'Hola mundo'
}
// Opcion 2
const saludar1 = () => 'Hola mundo'; 

// Fat aroow function con argumentos.
// Opcion 1
const saludar2 = (mensaje) => {
    return 'Hola mundo' + mensaje;
} 
// Opcion 2
const saludar3 = (mensaje) => 'Hola mundo' + mensaje;

// Constantes para guardar los resultados de las fat arrow functions. 
const resultado = saludar();
const resultado1 = saludar1()
const resultado2 = saludar2('soy miguel')
const resultado3 = saludar2('soy miguel')

// Los console.log para levantar los resultados de las funciones.
console.log(resultado, resultado1, resultado2, resultado3)