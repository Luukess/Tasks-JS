'use strict';

// const firstMot = [[1,2,3],[4,5,6], [7,8,9]];
// const secondMot = [[1,2,3],[4,5,6],[7,8,9]];

// class Multiplication{

//     constructor(firstMot, secondMot){
//         this.firstMot = firstMot;
//         this.secondMot = secondMot;
//     }

//     checkSize(){
//         let sizeOfFirstMot = this.firstMot.length;
//         let sizeOfFirstMot_2 = this.firstMot[0].length;
//         let SizeOfSecondMot = this.secondMot[0].length;
//         let SizeOfSecondMot_2 = this.secondMot.length;

//         if(sizeOfFirstMot === SizeOfSecondMot || sizeOfFirstMot_2 === SizeOfSecondMot_2){
//             return true;
//         }else{
//             return false;
//         }
//     }

//     prepareResultMot(){
//         let result;
//         if(this.firstMot.length > this.secondMot.length){

//             result = new Array(this.secondMot.length);
//             for(let i = 0; i < this.secondMot.length; i++){
//                 result[i] = new Array(this.secondMot[0].length)
//             }
//         }else if( this.firstMot.length < this.secondMot.length){

//             result = new Array(this.firstMot.length);
//             for(let i = 0; i < this.firstMot.length; i++){
//                 result[i] = new Array(this.firstMot[0].length)
//             }
//         }else{

//             result = new Array(this.firstMot.length);
//             for(let i = 0; i < this.firstMot.length; i++){
//                 result[i] = new Array(this.firstMot[0].length)
//             }
//         }

//         return result;
//     }

//     handleMultiplication(){

//         let result = this.prepareResultMot();

//         if(this.checkSize()){

//             for(let i = 0; i < result.length; i++){
//                 for(let j = 0; j < result[0].length; j++){

//                     result[i][j] = 0;

//                     for(let z = 0; z < result[0].length; z++ ){
//                         result[i][j] = this.firstMot[j][z] * this.secondMot[i][z];
//                     }
//                 }
//             }
//             return result;
//         }else{
//             console.log('The program cannot carry out the multiplication..');
//         }
//     }

// }

// const Mul = new Multiplication(firstMot, secondMot);

// // console.log(Mul.checkSize())
// console.log(Mul.handleMultiplication())

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


