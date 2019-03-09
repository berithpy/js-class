const readlineSync = require('readline-sync');

const ABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z',' '];
const MORSE = [
    '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
    '..', '.---', '-.-', '.-..', '--', '-.', '--·--', '---', '.--.',
    '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
    '-.--', '--..',' '];
let separador = "👌"
let resultado = ''
let origen = ''
function convertirAMorse(inputEs) {
    let nuevoStringMorse = ''
    stringUpper = inputEs.toUpperCase()
    for (let index = 0; index < stringUpper.length; index++) {
        const letra = stringUpper[index];
        for (let indexBusqueda = 0; indexBusqueda < ABC.length; indexBusqueda++) {
            const elementoBusqueda = ABC[indexBusqueda];
            const elementoReemplazo = MORSE[indexBusqueda];
            if (letra === elementoBusqueda) {
                nuevoStringMorse += elementoReemplazo +separador
            }
        }
    }
    return nuevoStringMorse
}

function convertirDeMorse(inputMorse) {
    let nuevoStringEsp = ''
    inputMorse=inputMorse.split(separador)
    for (let index = 0; index < inputMorse.length; index++) {
        const letra = inputMorse[index];
        for (let indexBusqueda = 0; indexBusqueda < MORSE.length; indexBusqueda++) {
            const elementoBusqueda = MORSE[indexBusqueda];
            const elementoReemplazo = ABC[indexBusqueda];
            if (letra === elementoBusqueda) {
                nuevoStringEsp += elementoReemplazo
            }
        }
    }
    return nuevoStringEsp
}


function menuPrincipal() {
    clearConsole()
    if(resultado){
        console.log(origen)
        console.log(resultado)
        console.log('\n')
    } 
    console.log(`Separador ${separador}`);

    console.log("1. Morse → Español");
    console.log("2. Español → Morse");
    console.log("3. Definir Separador");
    console.log("4. Prueba");    
    console.log("5. Salir");
    const option = Number(readlineSync.question(""));
    switch (option) {
        case 1:
            menuMorseEspañol()
            break;
        case 2:
            menuEspañolMorse()
            break;
        case 3:
            menuSeparador()
            break;
        case 4:
            console.log('test')
            let input="Buenas tardes"
            console.log(input)
            input=convertirAMorse(input)
            console.log(input)
            input=convertirDeMorse(input)
            console.log(input)
            break;
        case 5:
            running = false;
            break;
        default:
            console.log("Opcion no valida")
            break;
    }
}
function clearConsole(){
    console.log('\033[2J');
}

function menuMorseEspañol(){
    clearConsole()
    console.log("Morse → Español");
    const morse = readlineSync.question("Ingrese morse a convertir a texto: ");
    origen = morse
    resultado = convertirDeMorse(morse)
}

function menuEspañolMorse(){
    clearConsole()
    console.log("Español → Morse");
    const texto = String(readlineSync.question("Ingrese texto a convertir a morse: "));
    origen = texto
    resultado = convertirAMorse(texto)

}

function menuSeparador(){
    clearConsole()
    separador = readlineSync.question("Ingrese nuevo separador: ");
    
}

let running = true;
while(running){
    menuPrincipal()
}