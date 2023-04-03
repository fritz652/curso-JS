
//65- Patrón de retorno anticipado:
// Para entender esto lo haremos con un ejemplo:
// en el cual   se requiere que los datos sean siempre positivos, de lo contrario
// ocurriria un erros, que para mostrar un mensaje nosotrs haremos que sea undefined
// para dar a conocer que esta mal dato el dato:


function calcularRaizCuadrada(num){
    if (num< 0){
        return undefined;
       }
        return Math.sqrt(num)
    }

    console.log(calcularRaizCuadrada(25));// 5

    console.log(calcularRaizCuadrada(-25));// undefined


