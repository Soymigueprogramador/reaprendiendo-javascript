// Construye usuarios con funcion constructor. 

function usuario(name) {
    this.id = Math.random();
    this.name = name;
    this.name = name;
};

let user1 = new usuario("John");
let user2 = new usuario("John");

console.log(user1, user2);

// Este es el resultado del ejersicio. 
/* 
    usuario {id: 0.06046713422137784, name: 'John'}id: 0.06046713422137784name: "John"[[Prototype]]: Objectconstructor: ƒ usuario(name)[[Prototype]]: Object 
    usuario {id: 0.08244779045695205, name: 'John'}
*/