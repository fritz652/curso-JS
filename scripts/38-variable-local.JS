// Ambito Local.

// variable local: son variable locales para una funcion, estan definidas 
//                  para esa funcion y solo pueden funcionar dentro de esa funcion


function miFuncion(){
    var miVariableLocal = 4;
    console.log(miVariableLocal);
}

miFuncion(); // aqui se invoca  ala variable

// ahora si quisieramos acceder a la variable local fuera de la funcio generaria un error de referencia no definida:

console.log(miVariableLocal);
