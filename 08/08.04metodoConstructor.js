function Persona(nombre, apellido, telefono){
    this.nombre = nombre;
    this.apellido = apellido;
    this.telefono = telefono;
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

Persona.prototype.tel = "1123334";

let padre = new Persona("Juan", "Pereyra", "0303456");
console.log( padre );
console.log( padre.nombreCompleto());
console.log( padre.tel );
padre.tel = "123123123";
console.log( padre.tel );

let madre = new Persona("Maria", "Martinez", "0303457");
console.log( madre );
console.log( madre.nombreCompleto());
console.log( madre.tel );

padre.nombre = "Martin";

console.log( padre );
console.log( madre );



//distintas formas de constructores
/*

let miObjeto = new Object();
let miObjeto2 = {};

let miCadena1 = new String("Hola");
let miCadena2 = "Hola";

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean();
let miBoolean = false;

let miArreglo1 = new Array();
let miArreglo2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};

*/

