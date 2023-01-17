//FUNCIONES- código reutilizable
//Declaración

/*
function miFuncion(a, b){
   console.log("Suma: " + (a + b));
}
*/
//llamando a la función

miFuncion(2, 3);

//Return

function miFuncion(a, b){
    console.log(arguments.length);
    return a + b;
}

let resultado = miFuncion(2, 3);
console.log(resultado);


//Declaracion funciones de tipo expresion

let x = function (a, b){return a + b};

resultado = x(1, 2);
console.log(resultado);

//Definir funciones self-invoking - solo se puede llamar una vez.

(function (a, b){
    console.log("Ejecutando la función: " + (a + b));
})(3, 4);


//Funciones como objetos

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);
