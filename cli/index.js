/* 
Adivinador de numero de 0 a n

La maquina elige un numero de 0 a n y el usuario intenta adivinar

Necesitamos 
* Un generador de numeros al azar de 0 a n
* Una manera de manejar el input del usuario
*/
var readlineSync = require('readline-sync');

function getRandomInt(min, max) {
  maxC = max + 1
  return Math.floor(Math.random() * (maxC - min)) + min;
}

var limite = readlineSync.question('Cual es el rango de numeros entre los que quieres elegir? ');
var numeroAelegir = readlineSync.question('Elige un numero entre 0 y ' + limite + ' ');
console.log(numeroAelegir); 
var numeroAdivinado = getRandomInt(0,limite);

if (numeroAdivinado==numeroAelegir) {
  console.log('Adivinaste bitch 💅');
} else {
  console.log('No has adivinado, el numero correcto es: '+ numeroAdivinado);
};