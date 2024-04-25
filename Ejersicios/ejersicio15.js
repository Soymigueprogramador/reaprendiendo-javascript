let objeto = {
    id: 1,
    name: 'Miguel',
    login: function () {},
    logaut: function () {},
};

let propiedad = 'name';

function tienePropiedad(objeto, propiedad) {
    let propiedades = Object.keys(objeto); 
    for (let prop of propiedades) {
        if (prop === propiedad) {
            return true;
        } 
    }
    return false;
}

console.log(tienePropiedad(objeto, propiedad));