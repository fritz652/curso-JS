// Permanece en Fila

function proximoEnLaFila(arr , elemento){
    arr.push(elemento);
    return arr.shift();
}

var miArreglo =[1, 2, 3, 4, 5];

console.log("Antes: " + JSON.stringify(miArreglo));

console.log(proximoEnLaFila(miArreglo, 6));

console.log("Despues: " + JSON.stringify(miArreglo));