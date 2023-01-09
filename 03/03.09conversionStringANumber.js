let miNumero = "24x";

// console.log(typeof miNumero);

let edad = Number(miNumero);
//console.log(typeof edad);
if(edad >= 18){
    console.log("Puede votar");
} else {
    console.log("No puede votar");
}

let resultado = ( edad >= 18 ) ? "Puede votar" : "No puede votar";
console.log(resultado);

//verificar si es un valor numérico o no

if( isNaN(edad)){
    console.log("No es un numero");
} else {
    if(edad >= 18){
        console.log("Puede votar");
    } else {
        console.log("No puede votar");
    }
}