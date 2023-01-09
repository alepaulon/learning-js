// Tipos de datos en JS

/****STRING****/

var nombre = "Alejo";
console.log(nombre);
console.log(typeof nombre);

/****NUMBER****/

var numero = 24;
console.log(numero);
console.log(typeof numero);

/****OBJECT****/

var objeto = {
    nombre : "Mario",
    apellido : "Fernandez",
    telefono : "0303456"
}
console.log(objeto);
console.log(typeof objeto);

/****NULL (ausencia de valor) - tipo de dato OBJECT****/

var y = null;
console.log(y);
console.log(typeof y);

/****STRING - tipo de dato OBJECT****/

var autos = ["BMW", "AUDI", "CHEVROLET"]
console.log(autos);
console.log(typeof autos);

/****BOOLEAN (true o false)****/

var bandera = true;
console.log(bandera);
console.log(typeof bandera);

/****FUNCTION O CLASS****/

function miFuncion(){
}
console.log(typeof miFuncion);

class Persona{
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);
/****SYMBOL****/

var simbolo = Symbol("mi simbolo");
console.log(typeof simbolo)

/****UNDEFINED****/

var x;
console.log(x);
console.log(typeof x);

