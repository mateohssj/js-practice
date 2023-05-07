let totalUsuariosAtendidos = 0;
let atendidosPorDia = {
  terminal: {
    estudiante: 0,
    docente: 0
  },
  oficina: {
    estudiante: 0,
    docente: 0
  }
};

let usuariosTransferidos = 0;

while (true) {
  let opcion = prompt("Ingrese la opción: \n1. Registrar atención \n2. Mostrar estadísticas \n3. Salir");
  if (opcion == 1) {
    let modulo = prompt("Ingrese el módulo de atención (terminal/oficina): ");
    let especificacion = prompt("Ingrese la especificación del usuario (estudiante/docente): ");
    let transferido = prompt("¿Fue transferido el usuario? (s/n): ");
    if (transferido.toLowerCase() == "s") {
      transferido = true;
    } else {
      transferido = false;
    }
    registrarAtencion(modulo, especificacion, transferido);
  } else if (opcion == 2) {
    mostrarEstadisticas();
  } else if (opcion == 3) {
    break;
  } else {
    alert("Opción inválida");
  }
}

function registrarAtencion(modulo, especificacion, transferido) {
  totalUsuariosAtendidos++;
  switch (modulo) {
    case "terminal":
      switch (especificacion) {
        case "estudiante":
          atendidosPorDia.terminal.estudiante++;
          break;
        case "docente":
          atendidosPorDia.terminal.docente++;
          break;
        default:
          break;
      }
      break;
    case "oficina":
      switch (especificacion) {
        case "estudiante":
          atendidosPorDia.oficina.estudiante++;
          break;
        case "docente":
          atendidosPorDia.oficina.docente++;
          break;
        default:
          break;
      }
      break;
    default:
      break;
  }
  if (transferido) {
    usuariosTransferidos++;
  }
}

function mostrarEstadisticas() {
  console.log("Cantidad total de usuarios atendidos: " + totalUsuariosAtendidos);
  console.log("Atendidos por día y segmento en la terminal: ");
  console.log("  Estudiantes: " + atendidosPorDia.terminal.estudiante);
  console.log("  Docentes: " + atendidosPorDia.terminal.docente);
  console.log("Atendidos por día y segmento en la oficina: ");
  console.log("  Estudiantes: " + atendidosPorDia.oficina.estudiante);
  console.log("  Docentes: " + atendidosPorDia.oficina.docente);
  console.log("Cantidad de usuarios transferidos: " + usuariosTransferidos);
}
