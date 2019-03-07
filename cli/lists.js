/* 
Listas
* Escribe una funcion que retorna un array con los numeros de un rango
* ------------------- que retorna el elemento mas grande de una lista
* ------------------- que retorna una lista inversa
* ------------------- que retorne si es que se encuentra un elemento en la lista
* ------------------- que retorne los elementos en las posiciones impares
* ------------------- que verifique si un string es un palindromo
* ------------------- que suma todos los elementos del array con un for
* ------------------- que concatene dos listas
* ------------------- que combine dos listas alternando sus elementos
                      que ordene elementos de una lista ver en wiki
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

function sumaWhile(array) {
    let x = 0;
    let suma = 0;
    while (x < array.length) {
        suma = suma + array[x];
        x++;
    }
    return suma
}

function sumaRecursion(array, suma = 0, contador = 0) {
    if (contador >= array.length) {
        return suma
    }
    suma += array[contador];
    contador++;
    return sumaRecursion(array, suma, contador);
}


function concatArray(array1, array2) {
    for (let index = 0; index < array2.length; index++) {
        array1.push(array2[index]);
    }
    return array1
}

function arrayAlternadoConcat(arrayA, arrayB) {
    let alterArray = [];
    let largoDeArrayMayor = 0
    if (arrayA.length >= arrayB.length) {
        largoDeArrayMayor = arrayA.length
        largoMenor = arrayB.length
    }
    else {
        largoDeArrayMayor = arrayB.length
        largoMenor = arrayA.length
    }
    for (let index = 0; index < largoMenor; index++) {
        alterArray.push(arrayA[index]);
        alterArray.push(arrayB[index]);
    }
    if (largoDeArrayMayor > arrayA.length) {
        alterArray = concatArray(alterArray, arrayB.splice(largoMenor))
    } else {
        alterArray = concatArray(alterArray, arrayB.splice(largoMenor))
    }
    return alterArray
}

function arrayAlternado(arrayA, arrayB) {
    let alterArray = [];
    let largoDeArrayMayor = 0
    if (arrayA.length >= arrayB.length) {
        largoDeArrayMayor = arrayA.length
    }
    else {
        largoDeArrayMayor = arrayB.length
    }
    for (let index = 0; index < largoDeArrayMayor; index++) {
        const elementA = arrayA[index]
        const elementB = arrayB[index]
        if (elementA != undefined) {
            alterArray.push(elementA);
        }
        if (elementB != undefined) {
            alterArray.push(elementB);
        }
    }
    return alterArray
}


// Selection sort https://es.wikipedia.org/wiki/Ordenamiento_por_selecci%C3%B3n

function intercambiar(array, posicion1, posicion2) {
    let valorTemporal = array[posicion1]
    array[posicion1] = array [posicion2]
    array[posicion2] = valorTemporal
    return array
}

// 
function selectionSort(array) {
    var temp = 0;
    for (let i = 0; i < array.length - 1; i++) {
        min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        temp = array[min];
        array[min] = array[i];
        array[i] = temp;
    }
    return array;
}

function insertionSort (items) {
    for (var i = 0; i < items.length; i++) {
      let value = items[i];
      // almacena el valor acutal para poder ubicarse en el lugar correcto.
      for (var j = i - 1; j > -1 && items[j] > value; j--) {
        // itera por los items del array ordenado(del item actual al inicio)
        // copia cada item al siguiente lugar
        items[j + 1] = items[j];
      }
      // el ultimo item deberia ahora ser el valor del que queda
      items[j + 1] = value;
    }
  
    return list
  }

var array1 = [8, 5, 3, 4];
console.log(insertionSort(array1))