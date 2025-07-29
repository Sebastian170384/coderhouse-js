//tipo de datos primitivos
//strings, number, boolean , undefined,Nan,null

//objetos-----> dicionarios

let usuario = {
  //    clave: valor

  nombre: "pepe",
  edad: 32,
  pass: 123456,
  cumpleaños: "14/05/12",
  esMayor: true,
  direccion: { calle: "Italia", numero: 458 },
};

console.log(usuario);
//dot notation----> la notacion del .

console.log(usuario.nombre, usuario.pass); // solo se accede al nombre

usuario.cumpleaños = "15/07/2025"; //modificacion de valores dentro del objeto
console.log(usuario.cumpleaños);

//arrays

/*let usuario1 = {
  nombre: prompt("¿Cuál es tu nombre?"),
  edad: Number(prompt("¿Cuántos años tienes?")),
  pass: prompt("Crea una contraseña:"),
  cumpleaños: prompt("¿Cuál es tu fecha de nacimiento? (DD/MM/AA)"),
  esMayor: false, // Se asignará después con lógica
  direccion: {
    calle: prompt("¿En qué calle vives?"),
    numero: Number(prompt("¿Cuál es el número de tu casa?")),
  },
};

// Verificamos si es mayor de edad
usuario1.esMayor = usuario1.edad >= 18;

// Mostramos el objeto por consola
console.log(usuario1);*/

// Función principal del simulador
function simuladorMantencion() {
  alert(
    "Hola Somos AUTOMOTRIZ YORSH \nPor favor indícame tu nombre de tecnico"
  );

  let id = prompt("Escribe tu ID:");
  alert("Bienvenido usuario : " + id);

  alert(
    "Estas en la mantención de automóviles.\nEn el siguiente menú indica lo que quieres hacer."
  );

  let continuar = true;

  while (continuar) {
    let modelo = prompt(
      "Indica el modelo de tu auto:\naudi - toyota - nissan - chevrolet - otro"
    );

    switch (modelo) {
      case "audi":
        alert("Modelo ingresado: Audi");
        break;
      case "toyota":
        alert("Modelo ingresado: Toyota");
        break;
      case "nissan":
        alert("Modelo ingresado: Nissan");
        break;
      case "chevrolet":
        alert("Modelo ingresado: Chevrolet");
        break;
      case "otro":
        alert(
          "Por favor, consulta al administrador para verificar compatibilidad del vehículo."
        );
        break;
      default:
        alert("Modelo no reconocido.");
        break;
    }

    let opcion = prompt(
      "¿Qué deseas realizar?\nIngresa el número de la opción:\n1- Cambio de aceite\n2.- Balanceo de ruedas\n3.- Chequeo de frenos\n4.- Chequeo de niveles\n5.- Salir"
    );

    switch (opcion) {
      case "1":
        let aceite = prompt(
          "¿Cada cuántos kilómetros deseas hacer el cambio de aceite?\n1. 10.000 km\n2. 15.000 km"
        );
        if (aceite === "1") {
          alert("Usaremos aceite sintético. Revisión cada 10.000 km.");
        } else if (aceite === "2") {
          alert("Usaremos aceite de larga duración. Revisión cada 15.000 km.");
        } else {
          alert("Opción de aceite no válida.");
        }
        break;

      case "2":
        let ruedas = prompt(
          "¿Deseas cambiar las ruedas traseras hacia adelante? (si / no)"
        );
        if (ruedas === "si") {
          alert("Balanceo más cambio de posición de ruedas realizado.");
        } else if (ruedas === "no") {
          alert("Solo se realizará el balanceo.");
        } else {
          alert("Respuesta no válida.");
        }
        break;

      case "3":
        let frenos = prompt(
          "¿Deseas cambiar las pastillas de freno? (si / no)"
        );
        if (frenos === "si") {
          alert("Cambio de pastillas de freno agendado.");
        } else if (frenos === "no") {
          alert("Solo se realizará el chequeo.");
        } else {
          alert("Respuesta no válida.");
        }
        break;

      case "4":
        let niveles = prompt(
          "¿Deseas cambiar el líquido del radiador? (si / no)"
        );
        if (niveles === "si") {
          alert("Cambio de líquido de radiador realizado.");
        } else if (niveles === "no") {
          alert("Solo se revisarán los niveles.");
        } else {
          alert("Respuesta no válida.");
        }
        break;

      case "5":
        alert("Gracias por ocupar el simulador de Automotriz Yorsh.");
        continuar = false;
        break;

      default:
        alert("Opción no válida, intenta nuevamente.");
    }
  }
}

simuladorMantencion();
