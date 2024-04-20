/* 
    JavaScript toma estos string, los convierte en objeto y nos regresa su valor original.
    es como un objeto pero no es un objeto...! 

    metodos y propiedades de los string:
    Propiedades:
    1) .length (Nos mostrara el largo del string)
        Metodos de length
        .indexOf() (Nos regresa el indice de un string que esta dentro de otro string)
        .includes() (Nos regresa un texto que este dentro de otro texto)
        .replace() (Nos permite reemplazar el texto dentro de los string)
        .
    Metodos:
    1) toLowerCase() (Toma todo el string y lo pasa a minusculas)
    2) toUpperCase() (Toma todo el string y lo pasa a mayusculas)
    3) substring() (Trabaja como un indice y recibe dos argumentos )
    4) substr() (en este caso nos va a devolver solo los caracteres que nosotros le indiquemos. (este metodo esta deprecado))
    5) trim() (Esto nos va a eliminar los espacio a los costados del string)
    6) trimEnd() (Esto nos quita el espacio que hay a la derecha)
    7) trimStart() (Esto nos elomina el espacio a la izquierda) 
    
*/

const saludo = 'Hola Mundo!'; 
const despedida = new String('Adios Mundo!');

console.log(typeof saludo);
console.log(typeof despedida);

// Metodos de length 
console.log(saludo.length);
console.log(saludo.replace('Mundo', 'Mama'), saludo);
let nuevoSaludo = saludo.replace('Mundo', 'Mama'); 
console.log(nuevoSaludo);

// Mas metodos.
console.log(saludo.toUpperCase());

// Metodos de substring
console.log(saludo.substring(0, 10));
console.log(saludo.substr(3, 4));

const espacio = ' hola mundo ';
console.log(espacio.trim());