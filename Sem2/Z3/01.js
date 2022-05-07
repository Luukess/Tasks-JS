"use strict";

const board = [
    [34, 21, 32, 41, 25],
    [14, 42, 43, 14, 31],
    [54, 45, 52, 42, 23],
    [33, 15, 51, 31, 35],
    [21, 52, 33, 13, 23]
]

// console.log(board[0][0])

// let getPosition = board[0][0]

// let axisX = getPosition.toString().split('')[1]
// let axisY = getPosition.toString().split('')[0]

// console.log(axisX)

class TreasureHunter{

    constructor(startX, startY, board){
        this.x = startX;
        this.y = startY;
        this.board = board;
    }

    letsFindTreasute(){
        let positionX = this.x;
        let positionY = this.y;
        let found = false;
        while(!found){
            console.log(`Currentlu position ${positionX +1},${positionY + 1}`)
            let currentValue = this.board[positionX][positionY];
            let newPositionX = parseInt(currentValue.toString().split('')[0] - 1)
            let newPositionY = parseInt(currentValue.toString().split('')[1] - 1)

            if(positionX == newPositionX && positionY == newPositionY){
                console.log('Treasure found');
                found = true;
            }else{
                positionX = newPositionX;
                positionY = newPositionY
            }

        }
    }


}

const hunter = new TreasureHunter(0,0,board)

hunter.letsFindTreasute()

