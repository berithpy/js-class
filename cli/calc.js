/* 
Calculadora 

El programa te pregunta que operacion quieren usar y calcular

Necesitamos 
* Funcion para sumar,restar, multiplicar, dividr...
* Interfaz
* Devolver resultado
*/

const readlineSync = require('readline-sync');

function menu() {
  console.log("1. Suma");
  console.log("2. Resta");
  console.log("3. Multiplicacion");
  console.log("4. Division");
  const Operacion = Number(readlineSync.question("Qué operación desea realizar? Ver lista arriba "));
  let resultado = 0;
  switch (Operacion) {
    case 1:
      sum_list = numberPromptMenu("Primer sumando: " ,"Segundo sumando: ")
      resultado = suma(sum_list[0], sum_list[1]);
      break;

    case 2:
      resta_list = numberPromptMenu("Minuendo: " ,"Sustraendo: ")
      resultado = resta(resta_list[0], resta_list[1]);
      break;

    case 3:
      multi_list = numberPromptMenu("Ingrese el Multiplicando: " ,"Ingrese el Multiplicador: ")
      resultado = multiplicación(multi_list[0], multi_list[1]);
      break;

    case 4:
      divi_list = numberPromptMenu("Ingrese el Dividendo: ","Ingrese el Divisor: ")
      resultado = division(divi_list[0], divi_list[1]);
      break;

    default: 
      console.log("este valor no es valido")
      break;
  }
  console.log(`el resultado es ${resultado}`)
}
function suma(na, nb) {
  return na + nb
}

function multiplicación(na, nb) {
  return na * nb
}

function resta(na, nb) {
  return na - nb
}

function division(na, nb) {
  return na / nb
}

function numberPromptMenu(firstNumberText,secondNumberText){
  let a = Number(readlineSync.question(firstNumberText));
  let b = Number(readlineSync.question(secondNumberText));
  let listaTemporal=[a,b];
  return listaTemporal;
}
while (true) {
  menu();
}