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

function arrayFillerCard(){
    arrayFillerRow1(bingoRow1);
    arrayFillerRow2(bingoRow2);
    arrayFillerRow3(bingoRow3);
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


listOfBalls = [];
function ballsGenerator() {
    let ballDrop = getRandomInt(1, 10);
    if (listOfBalls.length >= 10) {
        console.clear();
        return console.log("No balls left, game over!");
    }
    else if (listOfBalls.indexOf(ballDrop) === -1) {
        listOfBalls.push(ballDrop);
    }
    else {
        ballsGenerator();
    }
}


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

function cardCellBlanker(){
    rowCellBlanker(bingoRow1);
    rowCellBlanker(bingoRow2);
    rowCellBlanker(bingoRow3);

}

// gen a number in listOfBalls
// compare with each element of each row
// if it matches, point out in card, bingoCellCounter++
// if one row's bingoCellCounter reaches 5, it's one line; bingoLineCounter++
// if bingoLineCounter reaches 2, it's two lines
// if bingoLineCounter reaches 3, it's BINGO BONGO
bingoCellCounter = 0;
bingoLineCounter = 0;
function checkRowWithList(bingoRow) {
    let bingoCellCounter = 0;
    for (let index = 0; index < bingoRow.length; index++) {
        if (bingoRow[index] === listOfBalls[listOfBalls.length - 1]) {
            bingoRow[index] = "-" + bingoRow[index] + "-";
            bingoCellCounter++;
            if (bingoCellCounter = 5 && bingoLineCounter = 0) {
                console.log("One Row Completed! Two to go");
                bingoLineCounter++;
            } else if(bingoCellCounter = 5 && bingoLineCounter = 1){
                console.log("Two Rows Completed! Only one more to go")
            } else if(bingoCellCounter = 5 && bingoLineCounter = 2){
                console.log("81N6O 84N60!!")
                
            }
        }
    }
}

function checkCardWithList(){
    checkRowWithList(bingoRow1);
    checkRowWithList(bingoRow2);
    checkRowWithList(bingoRow3);
    if (bingoCounter = 15){
        return console.log("BINGO BONGO")
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
    console.log("2. Exit\n");

    userInput = Number(readlineSync.question(""));
    switch (userInput) {
        case 1:
            console.log("Bingo Start");
            bingoCardGenerator();           //gen 3 rows of bingo card
            arrayFillerCard();              //fill values for each row
            cardCellBlanker()               //blank 4 out of 9 cells of each row
            bingoCardDisplay();             //print out Bingo Card
            checkCardWithList();            //check all rows with the last element on the balls list, also checks for points
            ballsGenerator();               //list of balls generator, to compare with card
            console.log(listOfBalls);       //test for list
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
