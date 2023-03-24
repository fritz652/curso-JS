// Operadores logicos: OR ||

/* 
Tabla: x || Y

| X | Y | X || Y |
------------------
| T | T |   T   |
| T | F |   T   |
| F | T |   T   |
| F | F |   F   |
La espresión solo es falsa  cuando ambos operadores 
son falsos
*/

console.log(true || true);   // true
console.log(true || false);  // false
console.log(false || true);  // false
console.log(false || false); // false

// Ejemplo

var a = 8

console.log((a > 5) || (a < 10)); // true

console.log((a > 10) || (a < 10)); // true

console.log((a == 10) || (a > 10)); // true


