// Cuales son metodos.

let objeto = {
    nombre: "John",
    apellido: "Buren",
    edad: 23,

    saludar: function(){
        console.log("Hola");
    },

    decirEdad: function(){
        console.log(this.edad);
    }
};

function cualesSonMetodos(obj) {
    for (let key in obj) {
        if (typeof obj[key] === "function") {
            console.log(key);
        }
    }
    
};

cualesSonMetodos(objeto); 