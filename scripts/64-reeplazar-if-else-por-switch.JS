
//64-reeplazar-if-else-por-switch


// Sea la sigueinte  funcion if-else:

function seleccionarIdioma(valor){
    var idioma;

    if (valor == 1){
        idioma = "Español";
    } else if (valor == 2) {
        idioma ="Frances";
    } else if (valor == 3) {
        idioma = "Italiano";
    } else {
        idioma = "Ingles";
    }

    return idioma;
}

console.log(seleccionarIdioma(3))

// se puede adaptar como si fuera una sentencia stwech de la siguiente 
// manera, par alo cual la funcion idioma sera idiom2 para poder apreciarlas a la vez:

function seleccionarIdioma2(valor){
    var idioma;

    switch (valor){
        case 1:
            idioma = "Español";
            break;
        case 2 :
            idioma ="Frances";
            break;
        case 3:
            idioma = "Italiano";
            break;
        default:
            idioma = "Ingles";
        break;
        }
        return idioma;
}

console.log(seleccionarIdioma2(2));