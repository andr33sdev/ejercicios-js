/*
Funcion que me devuelva el nombre de la resolucion dependiendo el ancho y alto asignado
*/

function nombreResolucion(ancho, alto) {
    if (ancho >= 7638 && alto >= 4320) {
        return "8K";
    } else if (ancho >= 3840 && alto >= 2160) {
        return "4K";
    } else if (ancho >= 2560 && alto >= 1440) {
        return "WQHD";
    } else if (ancho >= 1920 && alto >= 1080) {
        return "FHD";
    } else if (ancho >= 1270 && alto >= 768) {
        return "HD";
    } else {
        return false;
    }
}

let nombre = nombreResolucion(3850, 2160);
console.log(nombre);