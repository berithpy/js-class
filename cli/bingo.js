//bingo

const readlineSync = require('readline-sync');

function bingo() {
    //generate bingo card
    //display bingo card
    //make each row a separate array
    //generate numbers and put into array, making sure they don't have the same tens
    //roll and compare to array
    //check each row after each roll
    //change visually a cell if a number is the same than the one called
    //if 5 in a row are the same as the numbers called, BINGO BANGUERZ
}
//let randNumber;
//
//while (randNumber != 0) {
//    randNumber = getRandomInt(1, 9);
//    console.log(randNumber);
//
//}

function getRandomInt(min, max) {
    let maxC = max + 1
    return Math.floor(Math.random() * (maxC - min)) + min;
}


function bingoCardGenerator() {
    bingoRow1 = new Array(9).fill("x");
    bingoRow2 = new Array(9).fill("x");
    bingoRow3 = new Array(9).fill("x");
}

function arrayFiller(array) {
    for (let index = 0; index < array.length; index++) {
        if (array[index] === "x" && index === 0) {
            array[index] = getRandomInt(1, 9);
        } else if (array[index] === "x" && index != 8) {
            array[index] = getRandomInt(index * 10, index * 10 + 9);
        } else if (array[index] === "x" && index == 8) {
            array[index] = getRandomInt(index * 10, index * 10 + 10);
        }
    }
    return array
}

function compareArray(){
    

};



function bingoCardDisplay() {
    console.log(bingoRow1);
    console.log(bingoRow2);
    console.log(bingoRow3);
}


function menu() {
    console.log("Bingo Banguerz");
    console.log("1. Start Game");
    console.log("2. Exit");

    userInput = Number(readlineSync.question(""));
    switch (userInput) {
        case 1:
            console.log("Bingo Start");
            bingoCardGenerator();
            arrayFiller(bingoRow1);
            arrayFiller(bingoRow2);
            arrayFiller(bingoRow3);
            bingoCardDisplay();
            break;

        case 2:
            running = false;
            break;

        default:
            console.log("Invalid input, try again");
            break;
    }
}


let running = true;
while (running) {
    menu();
}
