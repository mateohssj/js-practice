/*
El software que se desarrollará controlará un cajero automático (ATM) a través de una 
simulación usando el lenguaje de programación JavaScript.
• El cajero automático atenderá a un cliente a la vez. Se le pedirá al cliente 
que inserte su documento de identidad y su pin de 4 dígitos, los cuales se 
enviarán al banco para su validación como parte de cada transacción. El 
cliente podrá entonces realizar una o más transacciones. El menú se 
mostrará en la consola hasta que el cliente indique que no desea realizar 
más transacciones.
• El cajero automático debe ser capaz de proporcionar los siguientes servicios 
al cliente:



• Un cliente debe poder realizar un retiro de efectivo de cualquier cuenta 
adecuada vinculada al documento de identidad, en múltiplos de $50000. Se 
debe obtener la aprobación del banco antes de entregar efectivo.
• Un cliente debe poder realizar un depósito en cualquier cuenta vinculada al 
documento de identidad, consistente en efectivo y/o cheques. El cliente 
ingresará el monto del depósito en el cajero automático e indicar si es 
efectivo o cheque.
• Un cliente debe poder realizar una transferencia de dinero entre dos 
cuentas cualesquiera vinculadas a al documento de identidad. 
• Un cliente debe poder realizar una consulta de saldo de cualquier cuenta 
vinculada al documento de identidad.
• El cajero automático comunicará al cliente los resultados de cada 
transacción dependiendo de su tipo. Ejemplo “retiro exitoso, puede tomar x 
dinero de la bandeja principal”
• Si el banco determina que el PIN del cliente no es válido, se le pedirá al 
cliente que vuelva a ingresar el PIN antes de que se pueda continuar con la 
transacción. Si el cliente no puede ingresar correctamente el PIN después 
de tres intentos saldrá de la aplicación. 
• El cajero automático tendrá un panel de operador con un interruptor que 
permitirá apagar o encender el cajero.


transation = prompt("ingrese la cantidad que desea tranferir");


*/










// FALTA HACER LA TRANSACCION DE UN USUARIO A OTRO, YA INICIA SESION, YA MUESTRA EL SALDO 


function logIn() {
  const client = {
    user1:
      {
        name : "santiago",
        user : 1004799618,
        pin : 2002,
        balance : 100000,
      },
    user2:
      {
        name : "luis",
        user : 1004961006,
        pin : 2003,
        balance : 0,
      }
  };

let name = prompt("ingrese su nombre");
let identification = prompt("ingrese el documento de identidad");
let pin = prompt("ingrese su pin de 4 digitos");
// let transation = prompt("ingrese la cantidad que desea transferir");

if (identification == client.user1.user && pin == client.user1.pin && name == client.user1.name ||
    identification == client.user2.user && pin == client.user2.pin && name == client.user2.name) 
  {
    alert("INICIO CORRECTAMENTE");
    alert("BIENVENIDO : "+ name);

let ATM = prompt("que desea hacer?  1. transferir 2.salir ")

  if (ATM == 1 && identification == client.user1.user) 
  {
    alert("su saldo es de : " +client.user1.balance);

    transaction = prompt("ingrese la cantidad que desea transferir");

    if (transaction > client.user1.balance) {
      alert("SALDO INSUFICIENTE")
    }
      else
    {
      client.user1.balance -= transaction;
        alert("TRANSACCION EXITOSA SU SALDO ES DE "+ client.user1.balance);

      client.user2.balance.push(transaction);
        alert("SE REALIZO UNA TRANSACCION A : "+ client.user2.name ,"de : "+ client.user2.balance)
    }
  }
  else if(ATM == 1 && identification == client.user2.user)
    {
      alert("su saldo es de : " +client.user2.balance);
    }
  }
    else
  {
      alert("ERROR DE INICIO");
  }
// //cerrar Function
}

// invocacion de la funcion
logIn()
