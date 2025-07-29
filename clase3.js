//funciones lineas de codigo para encapsular y reutilizar
console.log("funciona");
//funciones estructura para encapsular y despues reutilizar

//declarada

//creando , no se imprimira si no la llamo
function sumar() {
  //bloque de codigo
  console.log("esto esta dentro de la funcion");
  if (true) {
    console.log("esto es un if ");
  }
}

//llamar funcion colocando nombre de la funcion y colocando parentersis ()

sumar();

//otra

let userName = prompt("ingresa tu nombre");
function saludar() {
  alert(`hola ${userName} bienvenido a nuestra app`);
}
saludar();

function suma1() {
  console.log(2 + 2);
}
suma1();

//agregar parametros a los parentesis

function test(numeroUno, numeroDos, nombre) {
  console.log(numeroUno + numeroDos);
  console.log("hola " + nombre);
}

//pasar argumentos en los parentesis al llamar la guncion(que quiero que muestren esas variables)
test(5, 7, "seba");
test(2, 10, "cami");
test(3, 8, "benja");

//asisgnandole variable a los parametros si no se los pasan en argumentos , toma los que se colocan alli por defecto

function test(numeroUno = 5, numeroDos = 8, nombre = "sin nombre") {
  console.log(numeroUno + numeroDos);
  console.log("hola " + nombre);
}

//pasar argumentos en los parentesis al llamar la guncion(que quiero que muestren esas variables)
test(5, 7, "seba");
test(2, 7);
test(3, 8, "benja");

console.log("-------------------");
console.log("retornando funciones");

function restar(a, b) {
  a - b;

  //salida explicita
  return a - b;
  //salida implicita
}
let resultado = restar(5, 2);
//siempre la ejecucion de la funcion se transforma en lo que la funcion retorna con return, si yo no retorno nada JS retorna undefined
console.log(resultado);

function restar(a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    return "no se puede realizar la operacion matematica";
  }
}
let resultado1 = restar(5, "jony");

console.log(resultado1);

//scope------> alcance que tiene una variable

//locales

let user = "juan";
if (true) {
  let user = "pepe"; //se puede declarar otra vez la variable destro de otro ambiente de codigo
  console.log(user);
}
//funciones expresadas o anonimas

let funcionNumero = function (numero) {
  return 10 * numero;
};
let = resultadoFuncion = funcionNumero(5);
console.log(resultadoFuncion);

//funcion flecha o arrow function

console.log("funcion flecha");

let funcionFlecha = (unNumero) => unNumero * 7;
// no necesita return ni los parentesis de llave, si tengo un unico parametro puedo sacar parentesis de los parametros

let resultadoFlecha = funcionFlecha(10);
console.log(resultadoFlecha);

const sumarFlecha = (n1, n2, n3) => n1 + n2 + n3; //return
let resultadoSuma = sumarFlecha(1, 5, 8);
console.log(resultadoSuma);

// las finciones siempre comenzaran con const por buenas practicas ya que nunca cambian valor

const operacion = (n1, n2, tipo) => {
  if (tipo === "suma") {
    return n1 + n2;
  } else if (tipo === "resta") {
    return n1 - n2;
  } else {
    return "el tipo de operacion no es valida";
  }
};
let primerNumero = Number(prompt("ingresa el primer numero"));
let segundoNumero = Number(prompt("ingresa el primer numero"));
let tipoOperacion = prompt("ingresa la operacion");

let a = operacion(primerNumero, segundoNumero, tipoOperacion); //-->18
//let b = operacion(15, 3, "resta"); //->12
//let c = operacion(15, 3, "pepe"); //-->undefined
console.log(a);
//console.log(b);
//console.log(c);
