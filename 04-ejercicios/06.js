/*
Crear algoritmo que devuelva cantidad
de numeros positivos de un array
*/

let array = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos(arr) {
    let contadorPositivos = 0;
    for (numero of arr) {
        if (numero > 0) {
            contadorPositivos++;
        }
    }
    return contadorPositivos;
}

let resultado = cuantosPositivos(array);
console.log(resultado);