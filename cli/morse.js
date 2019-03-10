const readlineSync = require('readline-sync');

const ABC = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z', ' '];
const MORSE = [
    '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....',
    '..', '.---', '-.-', '.-..', '--', '-.', '--.--', '---', '.--.',
    '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-',
    '-.--', '--..', '///'];

testString = "Sample Text";
let separator = "#";

function latinAlphabetToMorse(string) {
    string = string.toUpperCase();
    for (let index = 0; index < string.length; index++) {
        for (let indexSearch = 0; indexSearch < ABC.length; indexSearch++) {
            string = string.replace(ABC[indexSearch], (MORSE[indexSearch] + separator))
        }
    }
    for (let indexSeparator = 0; indexSeparator < ABC.length; indexSeparator++) {
        string = string.replace(separator, " ")
    }
    return string
}

//console.log(latinAlphabetToMorse(testString));

//morseString = latinAlphabetToMorse(testString);
//morseArray = morseString.split(" ");

function morseToLatinAlphabet(morseToPhrase) {
    morseToPhrase = morseToPhrase.split(" ")
    for (let index = 0; index < morseToPhrase.length; index++) {
        for (let indexSearch = 0; indexSearch < ABC.length; indexSearch++) {
            if (morseToPhrase[index] === MORSE[indexSearch]) {
                morseToPhrase[index] = ABC[indexSearch];
            }
        }
    }
    return morseToPhrase.join("");
}

//console.log(morseArray);

//console.log(morseToLatinAlphabet(morseArray));

function menu (){
    console.log("Converter: Spanish Alphabet to Morse - Morse to Spanish Alphabet");
    console.log("\t1. Letters to Morse");
    console.log("\t2. Morse to Letters");
    console.log("\t3. Quit");
    userInput = Number(readlineSync.question(""));
        switch (userInput) {
            case 1:
                console.log("Input to convert from Alphabet to Morse");
                phraseToMorse = readlineSync.question("");
                output = latinAlphabetToMorse(phraseToMorse);
                console.log(output);
                break;
            case 2:
                console.log("Input to convert from Morse to Alphabet");
                morseToPhrase = readlineSync.question("");
                output = morseToLatinAlphabet(morseToPhrase);
                console.log(output);
                break;
            case 3:
                running = false;
                break;
            default:
                console.log("Invalid input, try again");
                break;
        }
}
let running = true;
while(running){
    menu();
}