//Tipos primitivos: no tienen ni propiedades ni métodos asociados al valor
let x = 10;

function cambiarValor(a){
    a = 20;
}

//Paso por valor
cambiarValor(x);//10
console.log(x);

//Paso por referencia

const persona = {
    nombre: "Jorge",
    apellido: "Mostro"
}

function cambiarValorObjeto(p1){
    p1.nombre = "Toto";
    p1.apellido = "Titan";
}

cambiarValorObjeto( persona );
console.log( persona );