// Encadenar Sentencias "if-else"


// Ejemplo 01

function interpretarIMC(indiceDeMasaCOrporal) {
    if (indiceDeMasaCOrporal < 18.5) {
        console.log("Bajo Peso");
    } else if (indiceDeMasaCOrporal <= 24.9){
        console.log("Normal");
    } else if (indiceDeMasaCOrporal <= 29.9)
        console.log("sobrepeso");

    else{
        console.log("Obseso")
    }
}

interpretarIMC(20);