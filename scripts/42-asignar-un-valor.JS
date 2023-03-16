// Asignar un valor retornado a una variable
//


//ejemplo 1
function sumar(a, b){
    return a + b;
}

var resultado = sumar(3 , 5);  //asignado un valor retornado a una variable

console.log(resultado);

//ejemplo 2

function crearCadenaConMeta(lenguajeDeProgramacion) {
    return "Mi meta es aprender " + lenguajeDeProgramacion;
}

var miMeta = crearCadenaConMeta("JavaScript")
console.log(miMeta);


// ejemplo 3

function stringConParametro(yoSoy){
    return yoSoy + "de buen caracter y cumplo mis objetivos.";
}
var Iam = stringConParametro("Yo Fritz, soy ")

console.log(Iam);


// ejmeplo4 c

function deporte(nombre){
    return "si yo " + nombre + " estare en buena forma.";
}

var salud = deporte("Fritz" + " corro todas las noches, ");

console.log(salud);