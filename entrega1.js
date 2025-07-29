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
