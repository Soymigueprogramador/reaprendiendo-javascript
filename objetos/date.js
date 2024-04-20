/*
    El objeto date nos permite trabajar con fechas
    Para crear un objeto que nos devuelva la fecha actual usamos este codigo
    "const ahora = new Date();",
    tengamos en cuenta que al usar la palabra reservada de "new" nos va a devolver la fecha actual que tiene nuestra computadora,
    es decir que si por algun motivo esta es diferente a la real nos va a mostrar una fecha diferente.

    Para que podamos pedir fechas en formato internacional debemos ingresar a los metodos de estos objetos.
    para ellos debemos llamar a una constante o variable que ya este creada o podemos crear una, ponemos un punto
    y tenemos que seleccionar alguno de estos metodos, debemos entender que los mismo siempre comienzan con "to",
    los mas importantes son: 
    1) toDateString
    2) toISOString
    3) toTimeString
    despues de seleccionar el metodo nocesario lo tenemos que onvolver en un sonsole.log
    Tenemos que tener en cuenta que:
    1) para ver la hora usamos toDateString
    2) para mandar la fecha desde el cliente al servido o al revez usamos tISOString
    3) para ver la fecha y la hora en un formato mas corto usamos toTimeString
    
    Para cuando necesitamos pedir un alo,mes y fecha usamos el metodo GET.
    con el metodo GET podemos obtener año, mes, dia, hora y demas. 
    1) getDate (Vamos a obtener el da del mes).
    2) getDay (Vamos a obtener el dia actual). 
    3) getFullYear /Vamos a obtener el año. 
    4) getMours (Vamos a obtener el mes). 
    5) gethOURS (vAMOS A OBTENER LA HORA).
    6) GetMinutes (Vamos  OBTENER LOS MINUTOS).
    7) getMillisecouns (Vamos  OBTENER LOS MILISEGUNDOS).
    8) getMonth (Vamos a obtener el mes).     
    */
// Pidiendo fecha y hora con formato tradicional.
const ahora = new Date();
const fecha = new Date('july 3 1992 19:32')

//console.log(ahora, fecha);

// Pidiendo fecha y hora con otro formato.
const cuandoNacioYaz = new Date(2003, 02, 20);

//console.log(cuandoNacioYaz)

// Pedir fecha internacional. 
console.log('dateString', cuandoNacioYaz.toDateString()); //Por algun motivo me dice que esta linea es una funcion.
console.log('dateISOString', cuandoNacioYaz.toISOString()); //Por algun motivo me dice que esta linea es una funcion.
console.log('timeString', cuandoNacioYaz.toTimeString()); //Por algun motivo me dice que esta linea es una funcion.

// Pedimos el año, mes y fecha
const hoy = new Date();

console.log(hoy.getTime());