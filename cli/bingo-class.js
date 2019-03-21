const readlineSync = require('readline-sync');

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
    let arrayRespuesta = [this.generarPosiciones(arrayA), this.generarPosiciones(arrayB), this.generarPosiciones(arrayC)];
    this.carton = arrayRespuesta;
  };
  //Verifica los aciertos x linea
  verificador(filaCarton) {
    let contadorAciertos = 0
    for (let index = 0; index < this.carton[filaCarton].length; index++) {
      if (filaCarton[index] === acierto) {
        contadorAciertos += 1;
      }
    }
    if (contadorAciertos === 5) {
      this.arrayVerificadorBingo[filaCarton] = true;
    }
    this.arrayVerificadorBingo[filaCarton] = false;
  };
  //Cuenta en cuantas filas ganaste
  puntosHechos() {
    let c = 0
    for (let index = 0; index < this.arrayVerificadorBingo.length; index++) {
      if (rrayVerificadorBingo[index] === true) {
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
  }
};
let cp = new CartondeBingo()
cp.imprimirCarton();

