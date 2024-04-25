// Crea copias.

let objeto1 = {
    id: 1,
    name: 'Miguel',
}

function crearCopia(objeto1) {
    let copia = {} 
    for( llave in objeto1 ) {
     copia[llave] = objeto1[llave];
    }
    return copia;
}

let objeto2 = crearCopia(objeto1); 

console.log({ objeto1, objeto2 })
