// Argumentos:  basicamnete es agregarla a una función parametros y argumentos

// las fucniones nos permiten generar codigo reutilizable, ahui radica su importacia.

function sumar(a, b){ // a y b son los parametros de la funcion
    var suma = a + b;                                                 // esta linea
    console.log("El resultado de " + a +" + " + b +" es " + suma);   // y esta linea son el cuerpo de la funcion
}


// POdemos ver que si llamamos a la funcion sumar con diferentes parametros, arroja las sumas correspondientes
sumar(4, 2);
sumar(5, 8);
sumar(2, 8);
sumar(5, 6);
sumar(6, 4);

