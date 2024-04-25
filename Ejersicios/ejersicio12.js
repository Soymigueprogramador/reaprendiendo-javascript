// Factory function. 

function createUsuario(nombre) {
    return {
        id: Math.random(),
        nombre
    }

};

let user1 = createUsuario('Miguel');
let user2 = createUsuario('Celeste');

console.log(user1, user2);