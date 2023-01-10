let condicion = true;

if(condicion){
    console.log("Verdad");
} else {
    console.log("Falso");
}

//Ejemplo

let numero = 12;

if( numero == 1 ){
    console.log("Uno");
} else if( numero == 2 ){
    console.log("Dos");
} else if( numero == 3 ){
    console.log("Tres");
} else if( numero == 4 ){
    console.log("Cuatro");
} else {
    console.log("Número desconocido");
}

//Ejercicios - estaciones del año - 

let mes = 4;
let estacion;

if( mes == 1 || mes == 2 || mes == 12 ){
    estacion = "Invierno";
} else if( mes == 3 || mes == 4 || mes == 5 ){
    estacion = "Primavera";
} else if( mes == 6 || mes == 7 || mes == 8){
    estacion = "Verano";
} else if( mes == 9 || mes == 10 || mes == 11 ){
    estacion == "Otoño";
} else {
    estacion = "Valor inexistente";
}

console.log(estacion);

// - calculo hora del día - 
// 6am-11am - Buenos días
// 12pm-18pm - Buenas tardes
// 19pm-24pm - Buenas noches
// 0am-5am - Durmiendo

let hora = 12;
let mensaje;

if( hora >= 6 && hora <= 11 ){
    mensaje = "Buenos días";
} else if( hora >= 12 && hora <= 18 ){
    mensaje = "Buenas tardes";
} else if( hora >= 19 && hora <= 24 ){
    mensaje = "Buenas noches";
} else if( hora >= 0 && hora <= 5 ){
    mensaje = "Durmiendo";
} else { 
    mensaje = "No existen esas horas";
}

console.log(mensaje);