//  Task 1.
let list = [1,6,23,8,4,8,3,7];

function firstFunction(){

    let sum = 0;
    for(let i = 0; i < list.length; i++){
        sum = sum + list[i];
    }
    console.log(`Task 1. => Return the sum: ${sum}`);
}
firstFunction();

//  Task 2.
let firstElement = list[0]
let lastElement = list[list.length -1]

function flFunction(x,y){
    let sum2 = x + y
    return sum2
}
console.log(`Task 2. => Sum first and last item:`,flFunction(firstElement, lastElement))

//  Task 3.

function factorial(){
    let item = list[1];
    let num = 1

    while(item >0 ){
        num = num * item--
    }
    return num
}
console.log('Task 3. => Factorial:',factorial())

// Task 4.

function reverArray(){
    let li = new Array()
    for(let i = list.length -1; i >= 0; i--){
        li.push(list[i])
    }
    return li
}
console.log('New Array:',reverArray());

// Task 5.




