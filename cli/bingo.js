const readlineSync = require('readline-sync');

//menu
function MenuBingo() {
  console.log('Bienvenido a Bingo Bongo! que desea hacer?');
  console.log('1. Jugar.');
  console.log('2. Generar Carton.');
  console,log('3. Elija su ')
  console.log('3. Salir.');
  let accion = readlineSync.question('');
}

//generador de numeros randoms
function getRandomInt(min, max) {
  let maxC = max + 1;
  return Math.floor(Math.random() * (maxC - min)) + min;
}

 
// debe dar 3 numeros sin repetir, hacer un for y dentro del for hacer un while y dentro del while, detenerse cuando sea length = 3

function generadorNumeros(min,max,largo=3) {
  let arrayXdecena = [];
  while (arrayXdecena.length != largo) {
   let numRandom = getRandomInt(min,max);
    if (!arrayXdecena.includes(numRandom)) {
      arrayXdecena.push(numRandom);
    }
  }
  return arrayXdecena.sort(function (a,b){return a-b});
}

//Genera la primera y la ultima decena
function rellenadorDecenas(min,max,posicion,arrayA,arrayB,arrayC) {
  numGenerado = generadorNumeros(min,max);  
  arrayA[posicion] = numGenerado[0];
  arrayB[posicion] = numGenerado[1];
  arrayC[posicion] = numGenerado[2];
}

//generar las posiciones
function generarPosiciones(array) {
  let arrayPosicion = generadorNumeros(0,8,4);
  for (let index = 0; index < arrayPosicion.length; index++) {
    array[arrayPosicion[index]] = '#'
  }
  return array
}

//guardar numeros en 3 array x la posicion
function guardarNumerosEnPosicion() {
  let arrayA = Array(9);
  let arrayB = Array(9);
  let arrayC = Array(9);
  rellenadorDecenas(1,9,0,arrayA,arrayB,arrayC)
  for (let indiceGral = 1; indiceGral < arrayA.length-1; indiceGral++) {
    rellenadorDecenas(indiceGral*10, 9+indiceGral*10, indiceGral,arrayA,arrayB,arrayC)
    
  }
  rellenadorDecenas(80,90,8,arrayA,arrayB,arrayC)
    let arrayRespuesta = [generarPosiciones(arrayA), generarPosiciones(arrayB), generarPosiciones(arrayC)];
  return arrayRespuesta;
}
console.log(guardarNumerosEnPosicion())


//ordenganizar el bingo