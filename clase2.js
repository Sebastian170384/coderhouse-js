//condicionales ----> estructuras de control     if/else  ---ternario --switch
//if
// && significa y ()ambas condiciones se cumplen
// || sign ifica o  un u otra expresion se cumple , una o otra
if (5 < 10) {
  console.log(" es menor");
} else {
  console.log(" es mayor");
}

let = estaAutenticado = true;

if (estaAutenticado == true) {
  console.log(" esta autenticado, tienes acceso");
} else {
  console.log(" no esta autenticado");
}

let rol = "empleado";

if (rol == "admin") {
  console.log("tienes acceso a todo");
} else if (rol == "empleado") {
  console.log(" puedes modificar");
} else {
  console.log("no puedes modificar");
}

//ternario       condicion / lo verdadero / lo falso

let edad = 15;

console.log(edad >= 18 ? "si puedes entrar" : "no puedes entrar");

//console.log("puedes entrar");
//console.log("no puedes entrar");

//switch

let marca = "audi";
let impuesto = 200;

if (marca === "vw") {
  impuesto = impuesto + 50;
} else if (marca === "audi") {
  impuesto = impuesto + 100;
} else if (marca === "ford") {
  impuesto = impuesto + 150;
}

console.log(impuesto);

let marca1 = "audi";
let impuestos = 500;
switch (marca1) {
  case "audi":
    impuestos = impuestos + 50;
    break;
  //case "audi":
  //impuestos += 50;     ----->  forma abreviada    +=
  //break;
  case "ford":
    impuestos = impuestos + 30;
    break;
  case "mercedes":
    impuestos = impuestos + 20;
    break;
  case "bmw":
    impuestos = impuestos + 33;
    break;
  default:
    impuestos: "tu auto no paga impuesto";
}
console.log(impuestos);

//Ciclos ----->bucles---> loop o estructura de repeticion
//ciclo for --while ---do while
console.log("------ciclos----- ");

for (let i = 1; i <= 2; i++) {
  //iniciador ; condicion; incremento
  console.log("hola");
  console.log(i);
}

let i = 2; //inicia variable
while (i <= 6) {
  //condicion
  console.log("hola"); //mensaje o ejecucion
  i++; //incremento
}

//do while ---> se cumple una vez el codigo
let y = 22;
do {
  console.log("hola");
  console.log(y);
  y++;
} while (y <= 10);

//ciclos

let n = 15;
for (let i = 1; i <= 10; i++) {
  console.log(`${n} x ${i} = ${n * i}`);
}

let numero = 5; //con variable
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

let numero1 = prompt("dime que tabla quieres"); //con mensajes
for (let i = 1; i <= 10; i++) {
  console.log(`${numero1} x ${i} = ${numero1 * i}`);
}

let numero2 = Number(prompt("que tabla quieres"));
console.log(typeof numero2);
