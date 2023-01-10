//let autos = new Array("BMW", "Mercedes Benz", "Fiat");

const autos = ["BMW", "Mercedes Benz", "Fiat"];
console.log(autos);

//acceder a los valores

console.log(autos[0]);
console.log(autos[1]);
console.log(autos[2]);

for(let i = 0; i < autos.length; i++){
    console.log(i + " : " + autos[i]);
}

//modificar valores

autos[1] = "Audi";
console.log(autos[1]);

//agregar valores

autos.push("Chevrolet");
console.log(autos);

autos[autos.length] = "Ford";
console.log(autos);

autos[6] = "Porsche";
console.log(autos);

//no es recomendable dejar valores vacíos, como arriba hicimos con el índice 5.

//para saber si estamos trabajando con un array o no:

console.log(Array.isArray(autos));

console.log(autos instanceof Array);