
//70-acceder-a-propiedades-con-variables

var resultado = {
    1: "Fritz10",
    2: "Carlos75",
    3: "Marco55",
    4: "Fernando"
};

var poscion = 1; // se le asigna una varible a la propiedad, para que cuando cambie esta
                // se actualice, esto es coveniente porque la variable puede estar 
                // en otro lado y asi se podria actulaizar

console.log(resultado[poscion]); // Fritz10