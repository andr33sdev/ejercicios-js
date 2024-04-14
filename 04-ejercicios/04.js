/*
Crear algoritmo que imprima numeros impares
*/

function imprimeImpares(cantidadNumeros) {
    for (let i = 0; i < cantidadNumeros+1; i++) {
        if(i%2!=0) {
            console.log("impar " + i);
        }
    }
}

imprimeImpares(19);