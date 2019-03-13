//bingo

const readlineSync = require('readline-sync');

function bingo() {
    //generate bingo card
    //display bingo card
    //make each row a separate array
    //generate numbers and put into array
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

function arrayFillerRow1(array) {
    for (let index = 0; index < array.length; index++) {
        if (index === 0) {
            array[index] = getRandomInt(1, 9);
        } else if (index != 8) {
            array[index] = getRandomInt(index * 10, index * 10 + 9);
        } else if (index == 8) {
            array[index] = getRandomInt(index * 10, index * 10 + 10);
        }
    }
    return array
}

function arrayFillerRow2(array) {

    for (let index = 0; index < array.length; index++) {
        if (index === 0) {
            do {
                array[index] = getRandomInt(1, 9);
            } while (array[index] === bingoRow1[index]);

        } else if (index != 8) {
            do {
                array[index] = getRandomInt(index * 10, index * 10 + 9);
            } while (array[index] === bingoRow1[index]);

        } else if (index == 8) {
            do {
                array[index] = getRandomInt(index * 10, index * 10 + 10);
            } while (array[index] === bingoRow1[index]);
        }
    }
    return array
}

function arrayFillerRow3(array) {

    for (let index = 0; index < array.length; index++) {
        if (index === 0) {
            do {
                array[index] = getRandomInt(1, 9);
            } while (array[index] === bingoRow1[index] || array[index] === bingoRow2[index]);

        } else if (index != 8) {
            do {
                array[index] = getRandomInt(index * 10, index * 10 + 9);
            } while (array[index] === bingoRow1[index] || array[index] === bingoRow2[index]);

        } else if (index == 8) {
            do {
                array[index] = getRandomInt(index * 10, index * 10 + 10);
            } while (array[index] === bingoRow1[index] || array[index] === bingoRow2[index]);
        }
    }
    return array
}


function randIndexGenerator() {
    let randIndexes = [];

    do {
        for (let index = 0; index < 3; index++) {
            randIndexes[index] = getRandomInt(0, 8);
        }
    } while (randIndexes[0] === randIndexes[1] || randIndexes[0] === randIndexes[2] || randIndexes[1] === randIndexes[2]);
    return randIndexes
}

//console.log("randIndexes:"+randIndexGenerator());
//console.log("randIndexes:"+randIndexGenerator());
//console.log("randIndexes:"+randIndexGenerator());


//gen 3 numbers, all different
//if row index is same than randIndex value, replace rowValue for separator

function rowCellBlanker(bingoRow) {
    let randIndexes = randIndexGenerator();
    for (let index = 0; index < bingoRow.length; index++) {
        for (let index2 = 0; index2 < randIndexes.length; index2++) {
            if (index === randIndexes[index2]) {
                bingoRow[index] = "#";
            }
        }
    }

}


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
            arrayFillerRow1(bingoRow1);
            arrayFillerRow2(bingoRow2);
            arrayFillerRow3(bingoRow3);
            rowCellBlanker(bingoRow1);
            rowCellBlanker(bingoRow2);
            rowCellBlanker(bingoRow3);
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
