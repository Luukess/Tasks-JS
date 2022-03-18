let startPoint = 1;
let endPoint = 100;
class UserNumber{

    static createNumber(startPoint, endPoint){

        // console.log(startPoint, endPoint, 'Start i end')
        let number = Math.floor(Math.random() * (endPoint - startPoint) + startPoint);
        return number;
    }

    static onlyUniqueNumbers(numbersArray){
        let unique = numbersArray.filter((element, index, arr) => {
            return arr.indexOf(element) === index
        })
        return unique
    }

    static compareNumbers(computerNumber, startPoint, endPoint){

        let numbersArray = new Array();
        let userNumber = UserNumber.createNumber(startPoint,endPoint);
        numbersArray.push(userNumber)

        let newStartPoint = startPoint;
        let newEndPoint = endPoint;
        
        console.log('Computer number', computerNumber)

        while(computerNumber !== userNumber){

            if(computerNumber > userNumber){
                console.log(`Your number ${userNumber} is too small!`)
                newStartPoint = userNumber;
                userNumber = UserNumber.createNumber(newStartPoint, newEndPoint);
                numbersArray.push(userNumber);

            }else if(computerNumber < userNumber){
                console.log(`Your number ${userNumber} is too big!`)
                newEndPoint = userNumber;
                userNumber = UserNumber.createNumber(newStartPoint, newEndPoint);
                numbersArray.push(userNumber);

            }

            if(computerNumber === userNumber){
                
                console.log(`You guessed computer number. That number is: ${userNumber}`);
                console.log(`Yours all numbers: ${UserNumber.onlyUniqueNumbers(numbersArray)}`)
            }

        }
    }
}

class ComputerNumber{

    constructor(startPoint,endPoint){
        this.startPoint = startPoint;
        this.endPoint = endPoint;
    }

    createNumber(){
        let number = Math.floor(Math.random() * (this.endPoint - this.startPoint) + this.startPoint);
        return number;
    }
}


let computerNumber = new ComputerNumber(startPoint,endPoint)

UserNumber.compareNumbers(computerNumber.createNumber(), startPoint, endPoint)