/* 
Calculadora 

El programa te pregunta que operacion quieren usar y calcular

Necesitamos 
* Funcion para sumar,restar, multiplicar, dividr...
* Interfaz
* Devolver resultado
*/

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

menu();

resultadoSuma = suma(4,7);
console.log(resultadoSuma);

resultadoMultiplicación = multiplicación(2,6);
console.log(resultadoMultiplicación);

resultadoResta = resta(10,7);
console.log(resultadoResta);
