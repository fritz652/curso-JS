
//76-Ejemplo de verificar-propiedades
// Aquí se vera un ejemplo util en un condicional


// esta funcion va a verificar si un objeto tiene una propiedad o no
function verificarPropiedad (obj,  propiedad) {   
    if (obj.hasOwnProperty(propiedad)){
        return "propiedad: " + obj[propiedad];
    } else {
        return "el objeto no tiene esta propiedad";
    }
}
var miCuaderno = {
    "color" : "verde",
    "categoria" : 3,
    "precio": 4.56,
};


console.log(verificarPropiedad(miCuaderno, "color")); //propiedad: verde
console.log(verificarPropiedad(miCuaderno, "origen")); // el objeto no tiene esta propiedad