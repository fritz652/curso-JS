
//74-objetos-para-búsquedas 

/* Sea la siguiente sentencia switch, sera reescrita de una manera mas simple */

function buscarElementoQuimico(simbolo) {
    var elementoQuimico = "";

    switch (simbolo) {
        case "Al":
            elementoQuimico = "Aluminio";
            break;

        case "S":
            elementoQuimico = "Azufre";
            break;

        case "Cl":
            elementoQuimico = "Cloro";
            break;

        case "He":
            elementoQuimico = "Helio";
            break;

        case "B":
            elementoQuimico = "Boro";
            break;

        case "Litio":
            elementoQuimico = "Li";
            break;
    }
}

console.log(buscarElementoQuimico("Al"));



/* Cuando se tiene una sentencia switch que asocia dos valores,
se puede reescribir el mismo código de manera mas sencilla con un objeto:  */


function buscarElementoQuimico(simbolo) {
    var simbolosQuimicos = {
        "Al" : "Aluminio",
        "S"  : "Azufre",
        "Cl" : "Cloro",
        "He" : "Helio",
        "B"  : "Boro",
        "Li" : "Litio"
    }

    return simbolosQuimicos[simbolo];
}

console.log(buscarElementoQuimico("Al")); // Aluminio
console.log(buscarElementoQuimico("S"));  // Azufre
console.log(buscarElementoQuimico("Cl")); // CLoro
console.log(buscarElementoQuimico("He")); // Helio
console.log(buscarElementoQuimico("B"));  // Boro
console.log(buscarElementoQuimico("Li")); // Litio