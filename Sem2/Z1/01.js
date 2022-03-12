let startPoint = 1 ;
let endPoint = 100;

const createRangeList = (start, stop) => {

    const endArray = new Array();

    for(let i = start; i <= stop; i++){
        endArray.push(i);
    }
    return endArray;
}

const primeNumbers = (range) => {

    let primeNumbers = new Array();

    for(let i = 0; i < range.length; i++){
        let numberFromRange = range[i];
        let isPrime = true;

        for(let j = 2; j < numberFromRange; j++){
            if(numberFromRange % j === 0){
                isPrime = false;
                break;
            }
        }
        if(isPrime && numberFromRange > 1){
            primeNumbers.push(numberFromRange);
        }
    }
    return primeNumbers;
}

const result = primeNumbers(createRangeList(startPoint, endPoint));
console.log(result);

