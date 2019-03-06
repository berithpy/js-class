/* 
Listas
* Escribe una funcion que retorna un array con los numeros de un rango
* ------------------- que retorna el elemento mas grande de una lista
* ------------------- que retorna una lista inversa
* ------------------- que retorne si es que se encuentra un elemento en la lista
* ------------------- que retorne los elementos en las posiciones impares
* ------------------- que verifique si un string es un palindromo
* ------------------- que suma todos los elementos del array con un for

*/

let exampleArray = [1, 2, 'e', 9, 5];


function listaDeUnRango(size) {
    let respuesta = [];
    for (let contador = 0; contador < size; contador++) {
        const valor = contador + 1;
        respuesta[contador] = valor;
    }
    return respuesta
}


function mayorElemento(array) {
    let mayor = 0
    for (let posicion = 0; posicion < array.length; posicion++) {
        let elementoActual = array[posicion];
        if (mayor < elementoActual) {
            mayor = elementoActual;
        }
    }
    return mayor
}

function listaInversa(array) {
    let nuevoArray = []
    for (let index = 0; index < array.length; index++) {
        let y = array.length - index - 1;
        nuevoArray.push(array[y]);
    }
    return nuevoArray
}

function numerosImpares(array) {
    let arrayDeImpares = []
    for (let index = 0; index < array.length; index++) {
        if (index % 2 != 0) {
            arrayDeImpares.push(array[index]);
        }
    }
    return arrayDeImpares
}

function findElementOnArray(array, element) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === element) {
            return true
        }
    }
    return false
}

function palindromo(string) {
    for (let index = 0; index < string.length; index++) {
        let contadorInverso = string.length - index - 1
        if (string[index] !== string[contadorInverso]) {
            return false
        }
    }
    return true
}

function sumaArray(array) {
    let suma = 0
    for (let index = 0; index < array.length; index++) {
        suma = suma + array[index];
    }
    return suma 
}

function sumaWhile(array){
    let x=0;
    let suma=0;
    while (x<array.length) {
        suma = suma+array[x];
        x++;
    }
    return suma
}

function sumaRecursion(array, suma=0,contador=0){
    if (contador>=array.length){
        return suma
    }
    suma += array[contador];
    contador++;
    return sumaRecursion(array, suma, contador);
}

console.log(sumaRecursion([1,2,3]))
