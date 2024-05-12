/*
   el metodo .map se utiliza para crear un array nuevo partiendo desde el que ya existe.
   para ello hacemos esto:
   1) Creamo un array.
   2) creamos una nueva variable con un nombre = nombreDelArrayAnterior.map()
      estos se van a encontrar embueltos en una etiqueta de html llamada li,
      esto permite que se pueda listar.  
   3) el metodo .map() rebice 
      el elemento que esta iterando,
      el indice,
      y el array completo 
    
      Aclaraciones:
      1) Tato el metodo .map() como el metodo .filter()
         mos genera un nuevo array.
         Esto lo logramos haciendo esto: 
      2) El metodo -map es especialmente util cuando estamos 
         construyendo software.
         Otra de sus grandes utilidades es que estos metodos se pueden encadenar,
         esto nos va a ayudar a la hora de hacer nuestro codigo mas legible. 
*/

let arrayDeGenteQueYaNoVeo = [
    { edad: 31, nombre: 'Miguel' },
    { edad: 28, nombre: 'Araceli' },
    { edad: 24, nombre: 'Celeste' },
    { edad: 21, nombre: 'Yazmin' },
]

//Esta es una de las formas para mapear.
const lista = arrayDeGenteQueYaNoVeo
    .filter(arrayDeGenteQueYaNoVeo => arrayDeGenteQueYaNoVeo.edad >= 30)
    .map(persona => {
    return `<li>${persona.nombre}</li>`;
  });
  const html = `<ol>${lista.join('')}</ol>`;

//Otra forma de hacerlo pero mapeand otro valor.
const mapeado = arrayDeGenteQueYaNoVeo.map(persona => {
    return {
        ...persona,
        mayor: persona.edad <= 30
    };
});

console.log(arrayDeGenteQueYaNoVeo, mapeado)