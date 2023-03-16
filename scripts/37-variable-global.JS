// Ambito Global

// Variable Global

var miVariableGlobal = 5; // es global porque se esta definiendo en el programa 
                          // principal y no  dentro de una función
                          // por eso se puede accede a ella enel programa y dentro de una funsion

console.log(miVariableGlobal);  //Aqui se la llama fuera d ela funcion dentro del programa principal

function miFuncion(){
    console.log(miVariableGlobal); // Aqui s ela llama dentro de  una función
}

miFuncion();

console.log(miVariableGlobal); // Aqui se la llama  fuera de una funcion y depsues de ella.