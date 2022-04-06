'use strict';

const matrixOne = [
    [-2, -3, 1],
    [-1, 4, 0]
];

const matrixTwo = [
    [-2, -1, 2],
    [3, 0, 1],
    [2, 2, -1]
];

class MultiplicationMatrix {

    constructor(firstMatrix, secondMartix) {
        this.firstMatrix = firstMatrix;
        this.secondMartix = secondMartix;
    }

    checkMatrix() {

        let isOk;

        if(this.firstMatrix.length > this.secondMartix.length){
            isOk = this.secondMartix.every((element) => {
                return element.length === this.firstMatrix.length;
            })
        }else if(this.firstMatrix.length < this.secondMartix.length){
            isOk = this.firstMatrix.every((element) => {
                return element.length === this.secondMartix.length;
            })
        }else{
            isOk = false;
        }
        return isOk;
    }

    prepareFinishArray(){
        let result = new Array(this.firstMatrix.length);
        for(let i = 0; i < result.length; i++){
            result[i] = new Array(this.secondMartix[i].length)
        }
        return result
    }


    multiplication(check){
        if(check){
            let resultArray = this.prepareFinishArray();
            for(let i = 0; i < resultArray.length; i++){
                for(let j = 0; j < this.secondMartix.length; j++){
                    resultArray[i][j] = 0;
                    for(let k = 0; k < this.secondMartix.length; k++){
                        resultArray[i][j] += this.firstMatrix[i][k] * this.secondMartix[k][j]
                    }
                }
            }
            
            return resultArray;
        }
    }

}

const multiplication = new MultiplicationMatrix(matrixOne, matrixTwo);

const check = multiplication.checkMatrix();

console.log(multiplication.multiplication(check));


