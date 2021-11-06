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

// (function (){
//     let list2 = [1,3,4,1,0,3] 
//     let nextArray = new Array()
//     let item1
//     let item2
//     let item3

//     for(let i = 0; i< list2.length; i++){
//         if(i == 1){
//             item1 = list2[i] + list2[i-1]
//         }else if(i == 3){
//             item2 = list2[i] + list2[i-1]
//         }else if(i == 5){
//             item3 = list2[i] + list2[i-1]
//         }
//     }
//     nextArray.push(item1,item2,item3)
//     console.log("Task 5 => ",nextArray)
// })()

// // task 6 

// let list3 = [1,3,4,1,0,3] 

// function taskSix(li){

//     li.pop()
//     console.log(li)
//     let nextArray2 = new Array()
//     let item4
//     let item5
//     let item6

//     for(let i = 0; i<li.length; i++){
//         if(i == 1){
//             item4 = li[i] + li[i - 1]
//         }else if(i == 3){
//             item5 = li[i] + li[i - 1]
//         }else if(i == 4){
//             item6 = li[i] + li[i]
//         }
//     }
//     nextArray2.push(item4,item5,item6)
//     return nextArray2
// }

// console.log(taskSix(list3))



// // task 7

// function randomValue(ranNumber){
//     return ranNumber[Math.floor(Math.random()*ranNumber.length)] 
// }

// console.log('Task 7. => ',randomValue(list))

// task 8.

// function randValue2(list, n){
//     let nArray = new Array()
//     let rand = 0
//     let minElement = 0

//     for(let i = 0; i < n; i++){
//         rand = list[Math.floor(Math.random() * list.length)]
//         nArray.push(rand)
//     }
//     minElement = Math.min(...nArray)

//     console.log(`Value of the new array: ${nArray} and min value of the array ${minElement} `)
// }

// randValue2(list,3)

// task 9.

// let array =  [1,6,23,8,4,8,3,7]

// function randomElementfromArray(arr){
//     let newArray = new Array()

//     while(arr.length > 0){
//         let itemOne = arr[Math.floor(Math.random() * arr.length)]
//         let i = arr.indexOf(itemOne)
//         newArray.push(arr[i])
//         arr.splice(i,1)
//     }
//     return newArray
// }
// console.log(randomElementfromArray(array))

//  task 10.

let nextArray = [15,46,20,80]
let nArray = [-1,1]

function randomOperation(array){
    let sum = array[0]
    let i = 1
    while(array.length > i){
        let number = nArray[Math.floor(Math.random() * nArray.length)]
        sum +=array[i] * number
        i++
    }
    return sum
}
console.log(randomOperation(nextArray))

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
