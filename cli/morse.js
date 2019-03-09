const readlineSync = require('readline-sync');

function MenuMorseConverter() {
    console.log("¿Que accion desea ejecutar? ")
    console.log("A. Traducir Palabras a Codigo Morse.")
    console.log("B. Traducir Codigo Morse a Palabras.")
    console.log("C. Salir del traductor.")
    let opcion = readlineSync.question('');
    let traduccion = '';
    opcion = opcion.toUpperCase();
    if (opcion === 'A' || opcion === 'B') {
        opcionSeparador = readlineSync.question(`\nDesea cambiar el separador(${separador}) actual?: \n1. SI \n2. NO \n`);
        if (opcionSeparador === '1') {
            separador = readlineSync.question('\nIngrese el separador que desee utilzar en su traduccion: \n');
        }
    }
    switch (opcion) {
        case 'A':
            palabra = readlineSync.question('\nIngrese la palabra o frase: \n');
            traduccion = convertirPalabraAMorse(palabra);
            console.log('\n',traduccion,'\n')
            break;

        case 'B':
            morse = readlineSync.question('\nIngrese el Codigo Morse: \n');
            traduccion = convertirMorseaPalabra(morse);
            console.log('\n',traduccion,'\n')
            break;
        case 'C':
            stop = true
            break;
        default:
            console.log('Opcion no valida. Intente de nuevo.\n\n');
    }
}

const abecedario = ['Ñ',' ', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const abecedarioMorse = ['  ', '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', '-----', '.----', '..---', '...--', '....-', '.....', '-....', '--...', '---..', '----.'];
let separador = '_';
function convertirPalabraAMorse(stringAconvertir) {
    let stringConvertido = '';
    stringAconvertir = stringAconvertir.toUpperCase();
    for (let iStr = 0; iStr < stringAconvertir.length; iStr++) {
        letra = stringAconvertir[iStr]
        for (let iabc = 0; iabc < abecedario.length; iabc++) {
            const letraAbc = abecedario[iabc];
            if (letra === letraAbc) {
                stringConvertido += abecedarioMorse[iabc] + separador;
            }
        }
    }
    return stringConvertido;
}

function convertirMorseaPalabra(morseAconvertir) {
    let morseConvertido = '';
    morseAconvertir = morseAconvertir.split(separador);
    for (let iMorse = 0; iMorse < morseAconvertir.length; iMorse++) {
        morse = morseAconvertir[iMorse]
        for (let iabc = 0; iabc < abecedarioMorse.length; iabc++) {
            const MorseAletra = abecedarioMorse[iabc];
            if (morse === MorseAletra) {
                morseConvertido += abecedario[iabc];
            }
        }
    }
    return morseConvertido;
}
let stop = false
while (!stop) {
    MenuMorseConverter();
}

