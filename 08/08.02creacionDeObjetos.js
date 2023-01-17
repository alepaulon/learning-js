let persona = new Object();
persona.nombre = "Mirko";
persona.apellido = "Marley";
persona.telefono = "0303456";

//acceder a las propiedades de los objetos

console.log(persona.nombre);
console.log(persona["apellido"]);

//for in
for( nombrePropiedad in persona ){
    console.log( nombrePropiedad );
    console.log( persona[nombrePropiedad]);
}

//agregar y eliminar propiedades

persona.mail = "abcd@meil.com";
console.log( persona );

delete persona.mail;
console.log( persona );

//formas de imprimir un object

//concatenar cada valor de cada propiedad

console.log( persona.nombre + ", " + persona.apellido);

//for in

for( nombrePropiedad in persona ){
    console.log( persona[nombrePropiedad]);
}

//Object.values

let personaArray = Object.values( persona );
console.log(personaArray);

//JSON.stringify

let personaString = JSON.stringify( persona );
console.log(personaString);





