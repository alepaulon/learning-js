//Parámetros y argumentos 
//Al declarar una función, por ejemplo, let sumar = function (a, b){return a + b};
//los parámetros serían a y b.
//Los argumentos se dan al llamar la función, es decir, resultado = sumar(1, 2);
//1 y 2 serían los argumentos.

/* let sumar = function (a, b){
    console.log(arguments[0]);
    console.log(arguments[1]);
    return a + b;
}

resultado = sumar(3, 2);
console.log(resultado);
*/

//Ejercicio: sumar todos los argumentos

let resultado = sumarTodo(5, 4, 13, 10, 9);
console.log(resultado);

function sumarTodo(){
    let suma = 0;
    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i]; //suma = suma + arguments[i]
    }
    return suma;
}

