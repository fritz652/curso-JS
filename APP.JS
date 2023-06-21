
//74-objetos-para-búsquedas 
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


