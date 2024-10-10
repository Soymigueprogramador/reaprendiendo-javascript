const miArray = [
    'Hola',
    23,
    true, 
    'Mundo',
    {},
    { id: 15 },
    [ 'Loco' ]
];

function dividePorTipos(array) {
    return array.reduce((acc, el) => {
        let clave = typeof el;  
        acc[clave] = acc[clave] ? acc[clave] : [];  
        acc[clave].push(el);  
        return acc;  
    }, {});
}

let array = dividePorTipos(miArray);
console.log(array);
