/* 
Adivinador de numero de 0 a n

La maquina elige un numero de 0 a n y el usuario intenta adivinar

Necesitamos 
* Un generador de numeros al azar de 0 a n
* Una manera de manejar el input del usuario
*/
var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ');
console.log('Hi ' + userName + '!');