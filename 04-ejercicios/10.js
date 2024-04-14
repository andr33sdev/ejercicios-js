/*
Crear array de longitud N, y que sus elementos sean
numeros de 1 hasta N
*/

let longitud = 7;

function crearArray(n) {

    let array = []

    for (let i = 1; i <= n; i++) {
        array.push(i);
    }

    return array;
}

let resultado = crearArray(longitud);
console.log(resultado);