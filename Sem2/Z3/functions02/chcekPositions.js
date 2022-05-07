let PlusChceckPositionsX = function(lastObject, chessBoard){
    let Xposition = lastObject.x;
    let Yposition = lastObject.y
    let charValue = chessBoard[Xposition][Yposition]
    // console.log(charValue)
    let found = false;
    while(!found){
        Xposition++;
        charValue = chessBoard[Xposition][Yposition]
        // console.log(Xposition)
        if(charValue === 'X'){
            // console.log('Break')
            break;
        }else if(charValue != '.' && charValue != 'X'){
            // console.log('zwracam true i pozycję X',Xposition)
            found = true;
        }
    }
    return found
}

let MinusChceckPositionsX = function(lastObject, chessBoard){
    let Xposition = lastObject.x;
    let Yposition = lastObject.y
    let charValue = chessBoard[Xposition][Yposition]
    let found = false;
    while(!found){
        Xposition--;
        charValue = chessBoard[Xposition][Yposition]
        // console.log(Xposition)
        if(charValue === 'X'){
            // console.log('Break')
            break;
        }else if(charValue != '.' && charValue != 'X'){
            // console.log('zwracam true i pozycję X',Xposition)
            found = true;
        }
    }
    return found
}

let PlusChceckPositionsY = function(lastObject, chessBoard){
    let Xposition = lastObject.x;
    let Yposition = lastObject.y
    let charValue = chessBoard[Xposition][Yposition]
    let found = false;
    while(!found){
        Yposition += 1;
        charValue = chessBoard[Xposition][Yposition]
        // console.log(Yposition)
        if(charValue === 'X'){
            // console.log('Break')
            break;
        }else if(charValue != '.' && charValue != 'X'){
            // console.log('zwracam true i pozycję Y',Yposition)
            found = true;
        }
    }
    return found
}

let MinusChceckPositionsY = function(lastObject, chessBoard){
    let Xposition = lastObject.x;
    let Yposition = lastObject.y
    let charValue = chessBoard[Xposition][Yposition]
    let found = false;
    while(!found){
        Yposition -= 1;
        charValue = chessBoard[Xposition][Yposition]
        // console.log(Yposition)
        if(charValue === 'X'){
            // console.log('Break')
            break;
        }else if(charValue != '.' && charValue != 'X'){
            // console.log('zwracam true i pozycję Y',Yposition);
            found = true;
        }
    }
    return found
}


module.exports = {
    PlusChceckPositionsX: PlusChceckPositionsX,
    PlusChceckPositionsY: PlusChceckPositionsY,
    MinusChceckPositionsX: MinusChceckPositionsX,
    MinusChceckPositionsY: MinusChceckPositionsY
}