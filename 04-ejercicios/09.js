/*
Crear algoritmo que devuelva un
array de objetos en base a pares
*/

let pairs = [
    [1, { name: 'Nicolas' }],
    [2, { name: 'Felipe' }],
    [3, { name: 'Chanchito' }],
];

function toCollection(arr) {

    let collection = [];

    for (let i = 0; i < arr.length; i++) {
        
        collection.push({
            id: arr[i][0], //Para el id accedemos a la posicion i del array, y posicion siempre 0 de su array hijo (posicion del id)
            name: arr[i][1], //Para el name accedemos a la posicion i del array, y posicion siempre 1 de su array hijo (posicion del name)
        });

    }

    return collection;
}

let resultado = toCollection(pairs);
console.log(resultado);