const readlineSync = require('readline-sync');

function bingo() {
    // bingoCardGenerator();           //gen 3 rows of bingo card
    // bingoCardFiller(bingoCard);              //fill unique values for each cell
    // cardCellBlanker()               //blank 4 out of 9 cells of each row
    ballsGenerator();               //list of balls generator, to compare with card
    checkCardWithList(bingoCard, listOfBalls);            //check all rows with the last element on the balls list
    bingoCardDisplay();             //print out Bingo Card
}

//random number generator, takes min and max for range of output 
function getRandomInt(min, max) {
    let maxC = max + 1
    return Math.floor(Math.random() * (maxC - min)) + min;
}


//creates 3 rows in bingoCard
//bingoCard[0][0] to bingoCard[2][8], 27 elements

function bingoCardGenerator() {
    bingoCard = [];
    bingoCard[0] = new Array(9).fill("x");
    bingoCard[1] = new Array(9).fill("y");
    bingoCard[2] = new Array(9).fill("z");
    return bingoCard
}

function bingoCardDisplay() {
    console.log(bingoCard);
}


//bingoCardGenerator();

function bingoCardFiller(bingoCard) {
    let randNumber = 0;
    for (rowIndex = 0; rowIndex < 3; rowIndex++) {
        for (columnIndex = 0; columnIndex < 9; columnIndex++) {
            if (columnIndex === 0) {
                do {
                    randNumber = getRandomInt(1, 9);
                    if (bingoCardArray.indexOf(randNumber) === -1) {
                        bingoCardArray.push(randNumber);
                        bingoCard[rowIndex][columnIndex] = randNumber;
                    }
                } while (bingoCardArray.indexOf(randNumber) === -1 || typeof bingoCard[rowIndex][columnIndex] !== 'number');

            } else if (columnIndex > 0 && columnIndex < 8) {
                do {
                    randNumber = getRandomInt(columnIndex * 10, columnIndex * 10 + 9);
                    if (bingoCardArray.indexOf(randNumber) === -1) {
                        bingoCardArray.push(randNumber);
                        bingoCard[rowIndex][columnIndex] = randNumber;
                    }
                } while (bingoCardArray.indexOf(randNumber) === -1 || typeof bingoCard[rowIndex][columnIndex] !== 'number');

            } else if (columnIndex == 8) {
                do {
                    randNumber = getRandomInt(columnIndex * 10, columnIndex * 10 + 10);
                    if (bingoCardArray.indexOf(randNumber) === -1) {
                        bingoCardArray.push(randNumber);
                        bingoCard[rowIndex][columnIndex] = randNumber;
                    }
                } while (bingoCardArray.indexOf(randNumber) === -1 || typeof bingoCard[rowIndex][columnIndex] !== 'number');
            }
        }
    }
    return bingoCard
}

//bingoCardFiller(bingoCard);

//console.log(bingoCardFiller(bingoCard));

//console.log(bingoCardArray);


//creates 4 random different numbers between 0 and 8, to be used in cardCellBlanker()
function randIndexGenerator() {
    let randIndexes = [];
    let randNumber = 0;
    while (randIndexes.length < 4) {
        do {
            randNumber = getRandomInt(0, 8);
        } while (randIndexes.indexOf(randNumber) !== -1);
        randIndexes.push(randNumber);
    }
    return randIndexes
}

//console.log(randIndexGenerator());

//each call generates a number that is not in the list yet, and pushes it to listOfBalls[], within range
listOfBalls = [];
function ballsGenerator() {
    let ballDrop = getRandomInt(1, 90);
    if (listOfBalls.length >= 90) {
        console.clear();
        console.log(bingoCard);
        //console.log(listOfBalls);
        return console.log("No balls left, game is (probably) over!");
    }
    else if (listOfBalls.indexOf(ballDrop) === -1) {
        listOfBalls.push(ballDrop);
        //console.log(listOfBalls);
    }
    else {
        ballsGenerator();
    }
}

//ballsGenerator();

//this was to check each element in bingoCard[][] with latest addition in listOfBalls[], but 
//might be best to check all the list each call? CHECKPLS

function checkCardWithList(bingoCard, listOfBalls) {
    for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
            if (bingoCard[rowIndex][columnIndex] === listOfBalls[listOfBalls.length - 1]) {
                bingoCard[rowIndex][columnIndex] = "-" + bingoCard[rowIndex][columnIndex] + "-";
            }
        }
    }
}

bingoCardGenerator();
bingoCardFiller(bingoCard);

console.log(bingoCardFiller(bingoCard));
console.log(bingoCard);
//console.log(bingoCardArray);

//creates 4 random different numbers between 0 and 8, to be used in cellsBlanker()
function randIndexGenerator() {
    let randIndexes = [];
    while (randIndexes.length < 5) {
        let randNumber = getRandomInt(0, 8);
        if(randIndexes.indexOf(randNumber) === -1){
            randIndexes.push(randNumber);
        }
    }
    return randIndexes
}

let running = true;
while (running) {
    menu();
}