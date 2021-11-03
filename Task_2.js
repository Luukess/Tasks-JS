// //  Task 1.
// let list = [1,6,23,8,4,8,3,7];

// function firstFunction(){

//     let sum = 0;
//     for(let i = 0; i < list.length; i++){
//         sum = sum + list[i];
//     }
//     console.log(`Task 1. => Return the sum: ${sum}`);
// }
// firstFunction();

// //  Task 2.
// let firstElement = list[0]
// let lastElement = list[list.length -1]

// function flFunction(x,y){
//     let sum2 = x + y
//     return sum2
// }
// console.log(`Task 2. => Sum first and last item:`,flFunction(firstElement, lastElement))

// //  Task 3.

// function factorial(){
//     let item = list[1];
//     let num = 1

//     while(item >0 ){
//         num = num * item--
//     }
//     return num
// }
// console.log('Task 3. => Factorial:',factorial())

// // Task 4.

// function reverArray(){
//     let li = new Array()
//     for(let i = list.length -1; i >= 0; i--){
//         li.push(list[i])
//     }
//     return li
// }
// console.log('New Array:',reverArray());

// // Task 5.

// let list2 = [1,3,4,1,0,3] 



// // task 7

// function randomValue(ranNumber){
//     return ranNumber[Math.floor(Math.random()*ranNumber.length)] 
// }

// console.log('Task 7. => ',randomValue(list))

// task 8.


// task 11.

// function dateInPolish(){
//     let todayDate = new Date()
//     weekDay = todayDate.getDay()

//     if(weekDay == 0){
//         return "Niedziela"
//     }else if(weekDay == 1){
//         return "Poniedziałek"
//     }else if(weekDay == 2){
//         return "Wtorek"
//     }else if(weekDay == 3){
//         return "Środa"
//     }else if(weekDay == 4){
//         return "Czwartek"
//     }else if(weekDay == 5){
//         return "Piątek"
//     }else if(weekDay == 6){
//         return "Sobota"
//     }
// }

// console.log("Task 11. =>" ,dateInPolish())

// // task 12.

// function daysToFriday(){

//     let dDay = new Date()
//     let weekDay = dDay.getDay()
//     console.log(weekDay)

//     let numOfDay = 5 - weekDay

//     if(numOfDay > 0){
//         console.log(`Task 12. => Days left until Friday ${numOfDay}`)
//     }else if(numOfDay == 0){
//         console.log("Task 12. => Today is friday! :)")
//     }else if(numOfDay < 0){
//         numOfDay = 7 + numOfDay
//         console.log(`Task 12. =>Days left until Friday ${Math.abs(numOfDay)}`)
//     }
// }

// daysToFriday()

// //  taks 13.

// function mathObject(x,y){
//     let sum = x+y
//     let sub = x-y
//     let mul = x*y
//     let div = x/y

//     let result = {
//         Sum: sum,
//         Sub: sub,
//         Mul: mul,
//         Div: div
//     }

//     return result
// }
// console.log("Task 13. => ",mathObject(15,12))
