
// Sentencias Switch ejemplo: Opción predeterminada


function selecionarIdioma(valor) {
    var idioma;
    switch (valor) {
        case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Italiano";
        case 3:
            idioma = "Portugues";
            break;
        default:
            idioma = "Ingles";
            break;
    }
    return idioma;
}

console.log(selecionarIdioma(2));