const readlineSync = require('readline-sync');

let arrayRespuesta = [];
function getRandomInt(min, max) {
  let maxC = max + 1;
  return Math.floor(Math.random() * (maxC - min)) + min;
}

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

//limpiar consola
function clearConsole() {
  console.log('\033[2J');
}

//funcion para salir del juego
function salir(stop = true) {
  while (!stop) {
    menu();
  }
}

class CartondeBingo {
  constructor() {
    this.generadorDeCarton();
    this.arrayVerificadorBingo = [false, false, false];
    this.acierto = '*';
  };

  //Genera la primera y ultima decena
  rellenadorDecenas(min, max, posicion, arrayA, arrayB, arrayC) {
    let numGenerado = generadorNumeros(min, max);
    arrayA[posicion] = numGenerado[0];
    arrayB[posicion] = numGenerado[1];
    arrayC[posicion] = numGenerado[2];
  };

  //Genera pocisiones vacias
  generarPosiciones(array) {
    let arrayPosicion = generadorNumeros(0, 8, 4);
    for (let index = 0; index < arrayPosicion.length; index++) {
      array[arrayPosicion[index]] = '#';
    }
    return array;
  };

  //Arma el Carton
  generadorDeCarton() {
    let arrayA = Array(9);
    let arrayB = Array(9);
    let arrayC = Array(9);
    this.rellenadorDecenas(1, 9, 0, arrayA, arrayB, arrayC);
    for (let indiceGral = 1; indiceGral < arrayA.length - 1; indiceGral++) {
      this.rellenadorDecenas(indiceGral * 10, 9 + indiceGral * 10, indiceGral, arrayA, arrayB, arrayC);
    }
    this.rellenadorDecenas(80, 90, 8, arrayA, arrayB, arrayC);
    arrayRespuesta = [this.generarPosiciones(arrayA), this.generarPosiciones(arrayB), this.generarPosiciones(arrayC)];
    this.carton = arrayRespuesta;
  };


  //Verifica los aciertos x linea
  verificador(indiceDeLaFilaDelCarton) {
    let contadorAciertos = 0
    for (let index = 0; index < this.carton[indiceDeLaFilaDelCarton].length; index++) {
      if (this.carton[indiceDeLaFilaDelCarton][index] === this.acierto) {
        contadorAciertos += 1;
      }
    }
    if (contadorAciertos === 5) {
      this.arrayVerificadorBingo[indiceDeLaFilaDelCarton] = true;
      return;
    }
    this.arrayVerificadorBingo[indiceDeLaFilaDelCarton] = false;
  };

  //imprime el carton
  imprimirCarton() {
    let lineasHorizontalesDelMarco = ''
    for (let index = 0; index < 27; index++) {
      lineasHorizontalesDelMarco += '-';
    }
    let cartonString = this.carton.join('\n');
    console.log(lineasHorizontalesDelMarco);
    console.log(cartonString);
    console.log(lineasHorizontalesDelMarco);
  };

  //reemplaza numeros acertados
  reemplazarNumeroAcertado(indiceDeLaFilaDelCarton, bolilla) {
    let indiceNroSorteado = this.carton[indiceDeLaFilaDelCarton].indexOf(bolilla);
    if (indiceNroSorteado > -1) {
      this.carton[indiceDeLaFilaDelCarton][indiceNroSorteado] = this.acierto;
    }
  };

  //Cuenta en cuantas filas ganaste
  puntosHechos() {
    let c = 0
    for (let index = 0; index < this.arrayVerificadorBingo.length; index++) {
      if (this.arrayVerificadorBingo[index] === true) {
        c += 1
      }
    };
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
    };
  };
};


let objetoDeClaseCarton = new CartondeBingo();


function generadorDeBolillas() {
  let arrayDeBolillas = generadorNumeros(1, 90, 90, false);
  return arrayDeBolillas;
};

function lanzarBolillas() {
  let array = generadorDeBolillas();
  for (let index = 1; index < array.length; index++) {
    console.log('La bolilla lanzada es:');
    console.log(array[index]);
    if (index < array.length - 1) {
      readlineSync.question('Presione enter para lanzar la siguiente.\n');
    }
  }
  console.log('Ya no quedan bolillas por lanzar.');
};



//Muestra el bingo y hace el carton mas lindo
function interfazCarton(bolilla) {
  clearConsole();
  console.log('Bolilla actual: ', bolilla);
  objetoDeClaseCarton.imprimirCarton();
  objetoDeClaseCarton.puntosHechos();
};

// Genera carton y genera lista de numeros adivinados
// En el for itera sobre la lista de numeros adivinados y reemplaza el numero adivinado  en el carton.
function jugar() {
  let cartonEnCrudo = objetoDeClaseCarton.carton;
  let bolillasExtraidas = generadorDeBolillas();
  for (let index = 0; index < bolillasExtraidas.length; index++) {
    let bolilla = bolillasExtraidas[index]
    for (let index = 0; index < cartonEnCrudo.length; index++) {
      objetoDeClaseCarton.reemplazarNumeroAcertado(index, bolilla); //usa el numero de indice de la fila del carton (0.1.2)
      objetoDeClaseCarton.verificador(index);
    }
    interfazCarton(bolilla);
    readlineSync.question('');
  }
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
      objetoDeClaseCarton.imprimirCarton(generadorDeCarton());
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