let startPoint = 1;
let endPoint = 100;
let count = 0;

const computerNumber = randomNumber(startPoint, endPoint)
let userNumber = randomNumber(startPoint, endPoint)

console.log(computerNumber, 'comp')
console.log(userNumber, 'User')

while(computerNumber !== userNumber){
    
    if(computerNumber > userNumber){
        console.log(`Your number ${userNumber} is too small!`)
        count += 1;
        startPoint = userNumber;
        // console.log(`new Start ${startPoint}`)
        userNumber = randomNumber(startPoint, endPoint)
    }else if(computerNumber < userNumber){
        console.log(`Your number ${userNumber} is too big!`)
        count += 1;
        endPoint = userNumber;
        // console.log(`new end ${endPoint}`)
        userNumber = randomNumber(startPoint, endPoint)
    }
}

if(computerNumber === userNumber){
    count += 1;
    console.log(`Numbers are the same! ${computerNumber} = ${userNumber}`)
    console.log(`Value of counter: ${count}`)
}

function randomNumber(start, end){
    let randomNumber = Math.floor(Math.random() * (end - start) + start)
    // console.log(`start from f ${start} end from f ${end}`)
    return randomNumber
}


