/*
Crear algoritmo que devuelva numero
menor y mayor de un array
*/

let array = [2, 5, 7, 15, -5, -100, 55];

function getMenorMayor(arr) {

    let menor = 0;
    let mayor = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < menor) {
            menor = arr[i];
        } else {
            mayor = arr[i];
        }
    }
    const resultado = [menor, mayor];
    return resultado;
}

let numeros = getMenorMayor(array);
console.log(numeros);