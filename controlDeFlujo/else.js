/*
    Else
¿Cuándo debemos usar else?
El else debemos usar cuando la primer condición no se este cumpliendo. 
Ejemplo: 
let edad = 21;

if (edad >= 16) {
    console.log('Puedes pasar solo');
} else if (edad === 14) {
    console.log('Puedes entrar con tu padre o madre');
} else if (edad < 14) {
    console.log('No puedes entrar');
}
console.log(edad);
cuando usamos los condicionales de if tenemos que tener en cuenta que que las evaluaciones que hace es desde arriba hacia a bajo y la primer condición que encuentre va hacer la primera que se ejecute. 

*/

let edad = 21;
if (edad >= 16) {
    console.log('Puedes pasar solo');
} else if (edad === 14) {
    console.log('Puedes entrar con tu padre o madre');
} else if (edad < 14) {
    console.log('No puedes entrar');
}
console.log(edad);
