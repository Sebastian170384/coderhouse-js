console.log("Hola Mundo");

console.error("error de logo");
console.warn("cuidado");

let edad = 15;
let dinero = true;

if (edad >= 18 || dinero) {
  console.log("puedes ingresar cuando traigas una botella");
} else {
  console.log("andate a la casa");
}

// and (&&) se tiene que cumplir las 2 condiciones para que el resultadop sea true
// or (||) se tiene que culplir una de las condiciones al menos para que sea true

//ciclo for
console.log("ciclo for");
for (let i = 1; i < 5; i++) {
  console.log("Número: " + i);
}

//ciclo while

console.warn("ciclo while");
let i = 0;
while (i < 5) {
  console.log("Número: " + i);
  i++;
}

//ciclo do while

console.log("ciclo do while");

let f = 0;
do {
  console.log("Número: " + f);
  f++;
} while (f < 5);

//ciclos de repeticion

for (let i = 0; i < 5; i++) {
  console.log("hola mundo");
}

//ciclos condicionales

const password = 1234;

let passwordingresado = prompt("ingrese su contraseña");

while (passwordingresado != password) {
  passwordingresado = prompt("ingrese su contraseña");
}

let numero = Number(prompt("cuantos pesos queres cambiar"));
let precioDivisa = Number(prompt("decime a cuanto esta el dolar"));
const convertir = (cantidad, precioDolar) => {
  return cantidad / precioDolar;
};

let resultado = convertir(numero, precioDivisa);
alert(`Por ${numero} pesos vas a obtener ${resultado} dolares`);
