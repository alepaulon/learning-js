/*Literales*/

numero = 10;
console.log(numero);

//No es una buena práctica - se debería usar let.

/*Let*/

let nombre;
nombre = "Juan"

//usando let, podemos cambiar el valor de la variable luego si queremos

/*Const*/

const apellido = "Perez";

//usando const no podemos cambiar el valor luego

/*MEJORES PRÁCTICAS PARA DECLARAR VARIABLES*/

let nombresito = "Mario Fernandez";
console.log( nombresito );

let x, y;
x = 10, y = 20;
let z = x + y;
console.log(z);

//JavaScript es sensible a mayusculas y minusculas:

let nombreCompleto = "Mario Fernandez";
let nombrecompleto = "Mario Pereyra";
console.log( nombreCompleto );
console.log( nombrecompleto );

//El nombre de una variable no puede comenzar con un número, pero sí con un _ o $, luego de ellos sí podemos usar números:

let a1comida;
let _1comida;
let $1comida;

//let 1comida; no se puede, no se inicia.

//Tampoco podemos usar las palabras reservadas (JavaScript Keywords) para declarar una función.



