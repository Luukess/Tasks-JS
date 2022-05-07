"use strict";
const check = require('./functions02/chcekPositions');
const board = require('./functions02/board');

const chessFactory = (function(){

    class Rook{
        constructor(char, x, y){
            this.char = char;
            this.x = x || 1;
            this.y = y || 1;
        }
    }

    class Knight{
        constructor(char, x, y){
            this.char = char;
            this.x = x || 1;
            this.y = y || 1;
        }
    }

    class Bishop{
        constructor(char, x, y){
            this.char = char;
            this.x = x || 1;
            this.y = y || 1;
        }
    }

    class Queen{
        constructor(char, x, y){
            this.char = char;
            this.x = x || 1;
            this.y = y || 1;
        }
    }

    class King{
        constructor(char, x, y){
            this.char = char;
            this.x = x || 1;
            this.y = y || 1;
        }
    }

    return{
        createPieces: function(piece){
            switch(piece.char){
                case 'R':
                    return new Rook(piece.char, piece.x, piece.y);
                case 'K':
                    return new Knight(piece.char, piece.x, piece.y);
                case 'B':
                    return new Bishop(piece.char, piece.x, piece.y);
                case 'Q':
                    return new Queen(piece.char, piece.x, piece.y);
                case 'G':
                    return new King(piece.char, piece.x, piece.y);
                default:
                    throw new Error('Sorry we can not create the piece!')
            }
        }
    }

})();

// let op = chessFactory.createPieces({char:'B', x:10, y:20});
// console.log(op)

let chessBoard = board.board

const listOfCharPieces = ['R', 'K', 'B', 'Q' , 'G']

const buildPiecesObject = function(listOfCharPieces){
    const char = listOfCharPieces[Math.floor(Math.random() * listOfCharPieces.length)]
    const positionX = Math.floor(Math.random() * (8 - 1) + 1);
    const positionY = Math.floor(Math.random() * (8 - 1) + 1);

    return{
        char: char,
        x: positionX,
        y: positionY
    }
}

let piecesReachToNexPieces = function(chessBoard,buildPiecesObject, createPieces,listOfCharPieces){
    let piecesArray = new Array();
    let piece = createPieces(buildPiecesObject(listOfCharPieces));
    let pieceMeetPiece = false;

    chessBoard[piece.x][piece.y] = piece.char; 
    piecesArray.push(piece);
    // console.log(piece)

    while(!pieceMeetPiece){
        piece = createPieces(buildPiecesObject(listOfCharPieces));;
        chessBoard[piece.x][piece.y] = piece.char;
        piecesArray.push(piece);

        let checkXPlus = check.PlusChceckPositionsX(piecesArray[piecesArray.length -1],chessBoard);
        let checkYPlus = check.PlusChceckPositionsY(piecesArray[piecesArray.length -1],chessBoard);
        let checkXMinus = check.MinusChceckPositionsX(piecesArray[piecesArray.length -1],chessBoard)
        let checkYMinus = check.MinusChceckPositionsY(piecesArray[piecesArray.length -1],chessBoard)

        if(checkXPlus || checkYPlus){
            console.log(`The pawn '${piece.char} x:${piece.x} y:${piece.y}' has met with another pawn along X axis.`)
            break;
        }

        if(checkXMinus || checkYMinus){
            console.log(`The pawn '${piece.char} x:${piece.x} y:${piece.y}' has met with another pawn along Y axis.`)
            break;
        }
    }

    chessBoard.forEach(element => console.log(element))
    console.log(piecesArray)
}

piecesReachToNexPieces(chessBoard,buildPiecesObject,chessFactory.createPieces,listOfCharPieces)