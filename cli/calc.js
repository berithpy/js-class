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

menu();
resultadoSuma = suma(4,7);
console.log(resultadoSuma);