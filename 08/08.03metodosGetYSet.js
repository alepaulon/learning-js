let persona = {
    nombre: "Alejo",
    apellido: "Paulon",
    edad: 24,
    idioma: "es",
    get lang(){
        return this.idioma.toUpperCase();
    },
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

console.log(persona.nombreCompleto);
console.log(persona.lang);

//método set

persona.lang = "en";
console.log(persona.lang);
console.log(persona.idioma);


