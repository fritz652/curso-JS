
//75-verificar-propiedades
// si exite o no exite; esta es un propiedad de objeto importente de aprender

var miCuaderno = {
    "color" : "verde",
    "categria" : 3,
    "precio": 4.56,
}

//hasOwnProperty: se podria traducir como: ¿tiene esta propiedad?

console.log(miCuaderno.hasOwnProperty("color")); //true  
console.log(miCuaderno.hasOwnProperty("origen")); //false