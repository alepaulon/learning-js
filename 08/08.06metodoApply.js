let persona1 = {
    nombre: "juan",
    apellido: "perez",
    nombreCompleto: function(titulo, tel){
        //return this.nombre + " " + this.apellido;
        return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
    }
}

let persona2 = {
    nombre: "carlos",
    apellido: "moreyra"
}

//uso de apply

console.log( persona1.nombreCompleto("Lic.", "12312344") );

let datosP2 = ["Ing.", "1122565"];
console.log( persona1.nombreCompleto.apply( persona2, datosP2 ) );