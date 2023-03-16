// cambito local vs ambilo global

// para esto vamos a declarar una variable global con el mismonombre en una variable local

var miNombre = "Fritz";

function mostrarMiNombre(){
    var miNombre ="Jaco";
    console.log(miNombre);
}

mostrarMiNombre(); // cuando llamamos la funcion  local se muestra Jaco, la variable local, mas no la global

console.log(miNombre);  // en cambio cuando llamamos a la variable global,
                        //   se muestr ala global mas no la local

