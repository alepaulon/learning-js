let a = 5;
let valMin = 0;
let valMax = 10;

//AND && (ambos operandos tienen q ser true para q dé true)

if(a >= valMin && a <= valMax){
    console.log("Dentro de rango");
} else {
    console.log("Fuera de rango");
}

//OR || (con que un operando sea true dará true)

let vacaciones = false, diaDescanso = true;

if( vacaciones || diaDescanso ){
    console.log("Puede asistir al juego");
} else {
    console.log("Está ocupado");
}

