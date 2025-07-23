//variables ... caja que guardan algo

//let o const

let nombre = "Juan";

console.log(nombre);

let password = 5487; //variable

console.log(password + 1);

const apellido = "blanco"; //constante

// prompt(apellido);
// console.log("hola sebastian " + apellido + " tu nombre no lo recuerdo");

//tipos de dato

// string =texto
let palabra = "casa";

//number =numeros enteros o decimales

let edad = 42;
let precio = 102.5;
let telefono = "457845";

//boolean =verdadero o falso true o false

let autenticado = true;
let esMayoEdad = false;

//operadores operadores mateaticos

let a = 7;
let b = 5;
console.log(a + b); //suma
console.log(a - b); //resta
console.log(a * b); //multiplicacion
console.log(a / b); //division
console.log(a, b); // muestra las 2 variables
console.log(a % b); //operador de modulo o resto

//concatencaion

let nombreUsuario = "Marcelo";
let saludo = "hola " + nombreUsuario + " como estas";
console.log(saludo);

//template literals
//backsticks
let saludoMasFacil = `hola ${nombreUsuario} como estas, tu edad es ${edad}`; // se coloca variable entre llaves ${} para nombrarla y se evita concatenar con los +
console.log(saludoMasFacil);

//operadsores de comparacion

let n1 = 5;
let n2 = 7;

console.log(n1 == n2); //==comparacion si es igual, devuelve boolean
console.log(n1 != n2); // desigualdad
console.log(n1 >= n2); //mayor o igual
console.log(n1 <= n2); //menor o igual

//comparacion simp0le --> js evalua el dato no el tipo de dato
console.log(n1 == n2);

//comparacion estricta ----> si evalua el tipo de dato y el dato
console.log(n1 === n2);
console.log(n1 !== n2);
