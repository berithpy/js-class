/* 
Calculadora 

El programa te pregunta que operacion quieren usar y calcular

Necesitamos 
* Funcion para sumar,restar, multiplicar, dividr...
* Interfaz
* Devolver resultado
*/

const readlineSync = require('readline-sync');

function menu(){

    console.log('este es el menu');
}

function suma(na,nb){
    return na+nb
}

function multiplicación(na,nb) {
    return na*nb
}

function resta (na,nb){
    return na-nb
}

function division (na,nb){
    return na/nb
}


menu();
console.log("1. Suma"); 
console.log("2. Resta");
console.log("3. Multiplicacion");
console.log("4. Division");
const Operacion = Number(readlineSync.question("Qué operación desea realizar? Ver lista arriba"));


switch (Operacion) {
    case 1:
        rSuma=suma(a,b);
        console.log(rSuma);
        break;
    case 2:
        rResta=resta(a,b);
        console.log(rResta);
    case 3:
        rMultiplicacion = multiplicacion(a,b);
        console.log(rMultiplicacion);
    case 4:
        rDivision=division(a,b);
        console.log(rDivision);
    
    default:console.log("este valor no es valido")
        break;
}
const