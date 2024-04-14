/*
Crear algoritmo que tome un array de
objetos y devuelva un array de pares
*/

let array = [{
    id: 1,
    name: 'Nicolas',
}, {
    id: 2,
    name: 'Felipe',
}, {
    id: 3,
    name: 'Chanchito',
}];

function toPairs(arr) {

    let pares = [];

    for (objeto of array) {
        
        pares.push([objeto.id, objeto]);

    }
    
    return pares;

}

let resultado = toPairs(array);
console.log(resultado);