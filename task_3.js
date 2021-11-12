// //  task 1

// let iffeFunction = (function(){
//     let privVar = "Zmienna prywatna typu string"

//     function showValue(){
//         if(privVar == null || privVar == undefined){
//             return `Zmienna prywatna jest null lub undefined w tym przypadku: ${privVar}`
//         }else{
//             return `Wartość zmiennej: ${privVar}`
//         }
//     }

//     function setValue(newValue){
//         if(newValue){
//             privVar = newValue
//         }
//     }

//     function reverseValue(){
//         if(Number.isInteger(privVar) == true){
//             return "Zmiana wartości: " + (privVar * (-1))
//         }else if(typeof privVar == "string"){
//             return `Odwrócona wartość: ${privVar.split('').reverse().join('')}`
//         }else{
//             return "Zmienna jest null lub undefined"
//         }
//     }

//     return{
//         showValue,
//         setValue,
//         reverseValue
//     }

// })()

// console.log(iffeFunction.showValue())
// console.log(iffeFunction.reverseValue())
// iffeFunction.setValue(12345)
// console.log(iffeFunction.showValue())
// console.log(iffeFunction.reverseValue())

//  task 2

// let basicOperations = {
//     sum: function(x,y){
//         return x + y
//     },

//     sub: function(x,y){
//         return x - y
//     },

//     mul: function(x,y){
//         return x * y
//     },

//     div: function(x,y){
//         return x / y
//     }
// }

// let calculator = (function(x,y){
    
//     let object = {
//         x: x,
//         y: y,
//         takeOperation: null,
//         setOperation: set,
//         calculate: calc
//     }

//     function set(take){
//         this.takeOperation = take
//     }

//     function calc(){
//         return this.takeOperation(this.x,this.y)
//     }

//     return object

// })(4,5)

// calculator.setOperation(basicOperations.mul)
// console.log(calculator.calculate())


//  task 3

// let BaseObject = {
//     x: 0,
//     y: 0,
//     sum: function(){
//         return this.x + this.y
//     }
// }
// let objectArray = [{x:2,y:3},{x:-1,y:16},{x:0,y:8}]

// //  wersja pierwsza
// for(let i = 0; i < objectArray.length; i++){
//     console.log('Zwrócony wynik wersja I: ',BaseObject.sum.call(objectArray[i]))
// }
// // wersja druga
// for(let i = 0; i < objectArray.length; i++){
//     let newBind = BaseObject.sum.bind(objectArray[i])
//     console.log('Zwrócony wynik wersja II: ',newBind())
// }
// // wersja trzecia
// for(let i = 0; i < objectArray.length; i++){
//     console.log('Zwrócony wynik wersja III: ',BaseObject.sum.apply(objectArray[i]))
// }
