// Operadores logicos: AND &&

/* 
Tabla: x && Y

| X | Y | X && Y |
------------------
| T | T |   T   |
| T | F |   F   |
| F | T |   F   |
| F | F |   F   |
La espresión solo es verdadera cuandoambos operadores 
son verdaderos
*/

console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false); // false