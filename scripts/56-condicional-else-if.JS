// Sentencias Condicionales else if


// Ejemplo 01

function clasificarValor(valor){
    if(valor % 2 == 0){
        console.log("Divisible entre 2.")
    }  else if ( valor % 3 == 0) {
        console.log("Divisible entre 3.")
    } else {
        console.log("No es divisible entre las opciónes.")
    }
}

clasificarValor(2);
clasificarValor(15);

// ejemplo 2

function myfuction(x){
    if( x * 2 > 3){
        console.log("this is a master in your experience anout a teme")
    } else if(x*2 < 1){
        console.log("its a good initial")
    } 
    else{
        console.log("you can, not  stop")
    }
}

myfuction(4);
myfuction(1);

