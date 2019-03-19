const readlineSync = require('readline-sync');
const acierto = '♦';

//generador de numeros randoms
function getRandomInt(min, max) {
  let maxC = max + 1;
  return Math.floor(Math.random() * (maxC - min)) + min;
}


//Genera numeros randoms dentro de un array del largo que necesites y con la opcion de ordenar o no
function generadorNumeros(min, max, largo = 3, ordenado = true) {
  let arrayXdecena = [];
  while (arrayXdecena.length != largo) {
    let numRandom = getRandomInt(min, max);
    if (!arrayXdecena.includes(numRandom)) {
      arrayXdecena.push(numRandom);
    }
  }
  if (ordenado === true) {
    return arrayXdecena.sort(function (a, b) { return a - b });
  }
  else {
    return arrayXdecena;
  }

}

//Genera la primera y la ultima decena -- lo hicimos de esta forma ya que la ultima decena tiene 1 numero de mas
function rellenadorDecenas(min, max, posicion, arrayA, arrayB, arrayC) {
  numGenerado = generadorNumeros(min, max);
  arrayA[posicion] = numGenerado[0];
  arrayB[posicion] = numGenerado[1];
  arrayC[posicion] = numGenerado[2];
}

//Genera las posiciones que estaran vacias en el carton del bingo // **mi idea es que puedas elegir con que rellenar esos espacios vacios + * # etc**
function generarPosiciones(array) {
  let arrayPosicion = generadorNumeros(0, 8, 4);
  for (let index = 0; index < arrayPosicion.length; index++) {
    array[arrayPosicion[index]] = '#';
  }
  return array;
}

//guarda numeros y espacios blancos en 3 arrays diferentes -- retorna los 3 arrays en 1-- primero carga la columna de decena, ya que por la forma en la que funciona el rellenador no encontramos otra forma de hacerlo todo en un solo For. Segundo carga las columnas de 20, 30, 40...70 y tercero carga la columna de 80, ya que es la unica que debe de elegir entre 11 numeros.
function generadorDeCarton() {
  let arrayA = Array(9);
  let arrayB = Array(9);
  let arrayC = Array(9);
  rellenadorDecenas(1, 9, 0, arrayA, arrayB, arrayC);
  for (let indiceGral = 1; indiceGral < arrayA.length - 1; indiceGral++) {
    rellenadorDecenas(indiceGral * 10, 9 + indiceGral * 10, indiceGral, arrayA, arrayB, arrayC);
  }
  rellenadorDecenas(80, 90, 8, arrayA, arrayB, arrayC);
  let arrayRespuesta = [generarPosiciones(arrayA), generarPosiciones(arrayB), generarPosiciones(arrayC)];
  return arrayRespuesta;
}


//genera las bolillas y las guarda en un array
function generadorDeBolillas() {
  let arrayDeBolillas = generadorNumeros(1, 90, 90, false);
  return arrayDeBolillas;
}

//lanzar bolillas
function lanzarBolillas() {
  array = generadorDeBolillas();
  for (let index = 1; index < array.length; index++) {
    clearConsole();
    console.log('La bolilla lanzada es:');
    console.log(array[index]);
    if (index < array.length-1) {
      readlineSync.question('Presione enter para lanzar la siguiente.\n');      
    }
  }
  console.log('Ya no quedan bolillas por lanzar.');
}

//Marca los numeros que coincidan entre las bolillas y el carton con el emoticon 😎
// fila carton es un array
function reemplazarNumeroAcertado(filaCarton, bolilla) {
  let indiceNroSorteado = filaCarton.indexOf(bolilla);
  if (indiceNroSorteado > -1) {
    filaCarton[indiceNroSorteado] = acierto;
  }
  return filaCarton;
}

// Genera carton y genera lista de numeros adivinados
// En el for itera sobre la lista de numeros adivinados y reemplaza el numero adivinado  en el carton.
function jugar() {
  let bingo = [false, false, false];
  let cartonEnCrudo = generadorDeCarton();
  let bolillasExtraidas = generadorDeBolillas();
  for (let index = 0; index < bolillasExtraidas.length; index++) {
    bolilla = bolillasExtraidas[index]
    for (let index = 0; index < cartonEnCrudo.length; index++) {
      let fila = reemplazarNumeroAcertado(cartonEnCrudo[index], bolilla);
      bingo[index] = verificador(fila);
    }
    interfazCarton(bingo, bolilla, cartonEnCrudo);
    readlineSync.question('');
  }
}


//Verificar si gano fila carton es un array
function verificador(filaCarton) {
  let contadorAciertos = 0
  for (let index = 0; index < filaCarton.length; index++) {
    if (filaCarton[index] === acierto) {
      contadorAciertos += 1;
    }
  }
  if (contadorAciertos === 5) {
    return true;
  }
  return false;
}

//Muestra el bingo y hace el carton mas lindo
function interfazCarton(bingo, bolilla, carton) {
  clearConsole();
  console.log('Bolilla actual: ', bolilla);
  imprimirCarton(carton);
  puntosHechos(bingo);
}

//imprime el Carton
function imprimirCarton(carton) {
  let lineasHorizontalesDelMarco = ''
  for (let index = 0; index < 27; index++) {
    lineasHorizontalesDelMarco += '-';
  }
  let cartonString = carton.join('\n');
  console.log(lineasHorizontalesDelMarco);
  console.log(cartonString);
  console.log(lineasHorizontalesDelMarco);
}

//indica si hiciste linea - doble linea o Bingo
function puntosHechos(bingo) {
  let c = 0
  for (let index = 0; index < bingo.length; index++) {
    if (bingo[index] === true) {
      c += 1
    }
  }
  if (c === 1) {
    console.log('Has completado 1 linea!!');
  }
  else if (c === 2) {
    console.log('Has completado 2 lineas!! Ya falta poco!!');
  }
  else if (c === 3) {
    console.log('Bingo Bongoo!! Ganaste!!');
    console.log('Muchas Felicidades!!!');
    console.log('Haz finalizado esta partida');
  }
  if (c != 3) {
    console.log('Presione la tecla Enter para lanzar otra bolilla');
  }
}

//funcion para salir del juego
function salir(stop = true) {
  while (!stop) {
    menu();
  }
}

//limpia la consola
function clearConsole() {
  console.log('\033[2J');
}



//Menu del bingo
function menu() {
  clearConsole();
  console.log('Bienvenido a BingoBongo!!! \nQue desea hacer?');
  console.log('1. Jugar.');
  console.log('2. Imprimir Carton.')
  console.log('3. Lanzar Bolillas al azar.')
  console.log('4. Salir.')
  let opcion = readlineSync.question('');
  switch (opcion) {
    case '1':
      jugar();
      break
    case '2':
      imprimirCarton(generadorDeCarton());
      break;
    case '3':
      lanzarBolillas();
      break
    case '4':
      salir(true);
      break
    default:
      console.log('Favor intente otra opcion');
  }
}

menu();