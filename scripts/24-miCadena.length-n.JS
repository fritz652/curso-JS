// Notacion de corchetes de izquierda a derecha

var miCadena = "JavaScript";

// Nota: El penultimo índice es longitud -2 porque comenzamos a contar desde 0;

console.log(miCadena[miCadena.length-2]);

// ahora podriamos tener todos los caracteres con esta formula
// console.log(miCadena[miCadena.length-n]);
// para esto primero averigua la longitud:

console.log(miCadena.length)

// entonces:
console.log(miCadena[miCadena.length-10]);
console.log(miCadena[miCadena.length-9]);
console.log(miCadena[miCadena.length-8]);
console.log(miCadena[miCadena.length-7]);
console.log(miCadena[miCadena.length-6]);
console.log(miCadena[miCadena.length-5]);
console.log(miCadena[miCadena.length-4]);
console.log(miCadena[miCadena.length-3]);
console.log(miCadena[miCadena.length-2]);
console.log(miCadena[miCadena.length -1]);



//llevando a la formula general solo cambiamos el valor de n:

n= 1;
console.log(miCadena[miCadena.length-n])