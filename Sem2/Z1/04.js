const exampleNumberFromUser = 10;

class FibonacciNumbers{

    static createFibonacciNumbers(numberFromUser){
        
        const fibonacciArray = [0,1]

        for(let i = 2; i < numberFromUser; i++){
            let number = fibonacciArray[i-2] + fibonacciArray[i-1]
            fibonacciArray.push(number)
        }
        return fibonacciArray
    }
}

console.log(FibonacciNumbers.createFibonacciNumbers(exampleNumberFromUser))


