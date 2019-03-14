const readlineSync = require('readline-sync');

function bingo() {
    bingoCardGenerator();           //gen 3 rows of bingo card
    arrayFillerCard();              //fill values for each row
    cardCellBlanker()               //blank 4 out of 9 cells of each row
    bingoCardDisplay();             //print out Bingo Card
    checkCardWithList();            //check all rows with the last element on the balls list, also checks for points
    ballsGenerator();               //list of balls generator, to compare with card
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


bingoCardGenerator();
console.log(bingoCard[0].length);

console.log(bingoCard[1][1].length);

bingoCardArray = [];
function bingoCardFiller(bingoCard) {
    for (rowIndex = 0; rowIndex < 3; rowIndex++) {
        for (columnIndex = 0; columnIndex < 9; columnIndex++) {
            if (columnIndex === 0) {
                do {
                    bingoCard[rowIndex][columnIndex] = getRandomInt(1, 9);
                    bingoCardArray.push(bingoCard[rowIndex][columnIndex]);
                } while (bingoCardArray.indexOf(bingoCard[rowIndex][columnIndex]) === -1);
            } else if (columnIndex > 0 && columnIndex < 8) {
                do {
                    bingoCard[rowIndex][columnIndex] = getRandomInt(columnIndex * 10, columnIndex * 10 + 9);
                    bingoCardArray.push(bingoCard[rowIndex][columnIndex]);
                } while (bingoCardArray.indexOf(bingoCard[rowIndex][columnIndex]) === -1);

            } else if (columnIndex == 8) {
                do {
                    bingoCard[rowIndex][columnIndex] = getRandomInt(columnIndex * 10, columnIndex * 10 + 10);
                    bingoCardArray.push(bingoCard[rowIndex][columnIndex]);
                } while (bingoCardArray.indexOf(bingoCard[rowIndex][columnIndex]) === -1);
            }
        }
    }
    return bingoCard
}

bingoCardFiller(bingoCard);

console.log(bingoCardFiller(bingoCard));

