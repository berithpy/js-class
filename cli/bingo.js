//bingo program in terminal

const readlineSync = require('readline-sync');

function bingo() {
    bingoCardGenerator();           //gen 3 rows of bingo card
    arrayFillerCard();              //fill values for each row
    cardCellBlanker()               //blank 4 out of 9 cells of each row
    bingoCardDisplay();             //print out Bingo Card
    checkCardWithList();            //check all rows with the last element on the balls list, also checks for points
    ballsGenerator();               //list of balls generator, to compare with card
}


// gen a number in listOfBalls
// compare with each element of each row

// make it so user input rolls the balls, and check each roll with all rows

// if it matches, point out in card, bingoCellCounter++
// if one row's bingoCellCounter reaches 5, it's one line; bingoLineCounter++
// if bingoLineCounter reaches 2, it's two lines
// if bingoLineCounter reaches 3, it's BINGO BONGO

//generate bingo card
//display bingo card
//make each row a separate array
//generate numbers and put into array
//roll and compare to array
//check each row after each roll
//change visually a cell if a number is the same than the one called
//if 5 in a row are the same as the numbers called, BINGO BANGUERZ

//random number generator, takes min and max for the range
function getRandomInt(min, max) {
    let maxC = max + 1
    return Math.floor(Math.random() * (maxC - min)) + min;
}

//creates 3 independent rows
function bingoCardGenerator() {
    bingoRow1 = new Array(9).fill("x");
    bingoRow2 = new Array(9).fill("x");
    bingoRow3 = new Array(9).fill("x");
}

//fills all cells in row one
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

//fills all cells in row two, compares with first row to not repeat values
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

//fills all cells in row three, compares with first and second row to not repeat values
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

//calls all arrayFillerRow# functions
function arrayFillerCard() {
    arrayFillerRow1(bingoRow1);
    arrayFillerRow2(bingoRow2);
    arrayFillerRow3(bingoRow3);
}

//creates 4 random different numbers between 0 and 8, to be used in rowCellBlanker()
function randIndexGenerator() {
    let randIndexes = [];

    do {
        for (let index = 0; index < 4; index++) {
            randIndexes[index] = getRandomInt(0, 8);
        }
    } while (randIndexes[0] === randIndexes[1] || randIndexes[0] === randIndexes[2] || randIndexes[1] === randIndexes[2]);
    return randIndexes
}

//replaces 4 random cells on a row with a '#' char
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

//calls rowCellBlanker() for each bingoRow#
function cardCellBlanker() {
    rowCellBlanker(bingoRow1);
    rowCellBlanker(bingoRow2);
    rowCellBlanker(bingoRow3);
    
}


//each call generates a number that is not in the list yet, and pushes it to listOfBalls[], within range
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

//displays all rows of the bingo card
function bingoCardDisplay() {
    console.log(bingoRow1);
    console.log(bingoRow2);
    console.log(bingoRow3);
}


bingoCellCounter1 = 0;
bingoCellCounter2 = 0;
bingoCellCounter3 = 0;
bingoLineCounter = 0;
bingoCounter = 0;

function checkRowWithList1(bingoRow) {
    for (let index = 0; index < bingoRow.length; index++) {
        if (bingoRow[index] === listOfBalls[listOfBalls.length - 1]) {
            bingoRow[index] = "-" + bingoRow[index] + "-";
            bingoCellCounter1++;

            }
        }
    }

function checkRowWithList2(bingoRow) {
    for (let index = 0; index < bingoRow.length; index++) {
        if (bingoRow[index] === listOfBalls[listOfBalls.length - 1]) {
            bingoRow[index] = "-" + bingoRow[index] + "-";
            bingoCellCounter2++;

            }
        }
    }

function checkRowWithList3(bingoRow) {
    for (let index = 0; index < bingoRow.length; index++) {
        if (bingoRow[index] === listOfBalls[listOfBalls.length - 1]) {
            bingoRow[index] = "-" + bingoRow[index] + "-";
            bingoCellCounter3++;

            }
        }
    }


//calls all checkRowWithList#()
function checkCardWithList(){
    checkRowWithList1(bingoRow1);
    checkRowWithList2(bingoRow2);
    checkRowWithList3(bingoRow3);

}


function pointSystem(bingoCellCounter) {
    if (bingoCellCounter === 5 && bingoLineCounter === 0) {
        console.log("One Row Completed! Two to go");
        bingoLineCounter++;
    } else if (bingoCellCounter === 5 && bingoLineCounter === 1) {
        console.log("Two Rows Completed! Only one more to go")
    } else if (bingoCellCounter === 5 && bingoLineCounter === 2) {
        console.log("81N6O 84N60!!");
        bingoCounter++;
    }
}

function checkCardWithList() {
    checkRowWithList(bingoRow1);
    checkRowWithList(bingoRow2);
    checkRowWithList(bingoRow3);
    if (bingoCounter === 15) {
        return console.log("BINGO BONGO")
    }
}




function menu() {
    console.log("🎰  Bingo Banguerz 🎰 \n");
    console.log("1. Start Game");
    console.log("2. Exit\n");

    userInput = Number(readlineSync.question(""));
    switch (userInput) {
        case 1:
            console.log("Bingo Start");
            bingo();
            console.log(listOfBalls);       //test for listOfBalls
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
