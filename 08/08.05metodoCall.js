let persona1 = {
    nombre: "juan",
    apellido: "perez",
    nombreCompleto: function(titulo, tel){
        return titulo + ": " + this.nombre + " " + this.apellido + ", " + tel;
    }
}

let persona2 = {
    nombre: "carlos",
    apellido: "moreyra"
}

//uso de call para usar el metodo persona1.nombreCompleto
//con los datos de persona2

console.log( persona1.nombreCompleto("Lic.", "2323112") );

persona1.nombreCompleto.call( persona2 );
console.log( persona1.nombreCompleto.call( persona2, "Ing", "0303456" ) );
