const readlineSync = require('readline-sync');
    
function getRandomInt(min, max) {
        let maxC = max + 1
        return Math.floor(Math.random() * (maxC - min)) + min;
    }

class Card {
    constructor() {
        this.bingoCard = this.bingoCardGenerator();
        this.points = points;
    }

    bingoCardGenerator() {
        bingoCard = [];
        bingoCard[0] = new Array(9).fill("x");
        bingoCard[1] = new Array(9).fill("y");
        bingoCard[2] = new Array(9).fill("z");
        return bingoCard
    }

    bingoCardDisplay() {
        console.log(this.bingoCard);
    }

    randIndexGenerator() {
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
    

    bingoCardFiller(bingoCard) {
        bingoCardArray = [];
        let randNumber = 0;
        for (rowIndex = 0; rowIndex < 3; rowIndex++) {
            for (columnIndex = 0; columnIndex < 9; columnIndex++) {
                if (columnIndex === 0) {
                    do {
                        randNumber = getRandomInt(1, 9);
                    } while (bingoCardArray.indexOf(randNumber) !== -1);
                    bingoCardArray.push(randNumber);
                    bingoCard[rowIndex][columnIndex] = randNumber;
    
                } else if (columnIndex > 0 && columnIndex < 8) {
                    do {
                        randNumber = getRandomInt(columnIndex * 10, columnIndex * 10 + 9);
                    } while (bingoCardArray.indexOf(randNumber) !== -1);
                    bingoCardArray.push(randNumber);
                    bingoCard[rowIndex][columnIndex] = randNumber;
    
                } else if (columnIndex == 8) {
                    do {
                        randNumber = getRandomInt(columnIndex * 10, columnIndex * 10 + 9);
                    } while (bingoCardArray.indexOf(randNumber) !== -1);
                    bingoCardArray.push(randNumber);
                    bingoCard[rowIndex][columnIndex] = randNumber;
                }
            }
        }
        return bingoCard
    }
    
    checkCardWithList(bingoCard, listOfBalls) {
        for (let rowIndex = 0; rowIndex < 3; rowIndex++) {
            for (let columnIndex = 0; columnIndex < 9; columnIndex++) {
                if (bingoCard[rowIndex][columnIndex] === listOfBalls[listOfBalls.length - 1]) {
                    bingoCard[rowIndex][columnIndex] = "-" + bingoCard[rowIndex][columnIndex] + "-";
                }
            }
        }
    }
    
    
}

class Balls {
    constructor() {
        this.list = [];
        this.lastOnList = lastOnList;
    }

    ballsGenerator() {
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
    
}

let card1 = new Card();
card1.bingoCardDisplay();


