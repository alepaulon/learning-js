let persona = {
    nombre: "Alejo",
    apellido: "Paulon",
    edad: 24,
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona);
console.log(persona.apellido);
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.nombreCompleto());




