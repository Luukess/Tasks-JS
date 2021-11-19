// task 1.

String.prototype.reverse = function(){
    return this.split('').reverse().join('')
}

console.log("To jest prototyp".reverse())

Number.prototype.reverse1 = function(){
    return this * (-1)
}

console.log((5).reverse1())

// // Task 3.
// let data = require('./Data.json')
// console.log(data[0])
// let op = JSON.stringify(data)
// let pd = JSON.parse(op)
// console.log(pd[0])


let mainIffeFunction = (function(){

    function getDataFromJons(){
        let dataFromJson = require('./Data.json')
        return dataFromJson
    }


    let structuresToHoldData = {
        index: getDataFromJons().map((p) => p.detailsOfPayent.date && p.index),
        id: getDataFromJons().map((p) => p._id),
        cost: getDataFromJons().map((p) => p.cost),
        type: getDataFromJons().map((p) => p.detailsOfPayent.Type),
        company: getDataFromJons().map((p) => p.detailsOfPayent.company),
        date: getDataFromJons().map((p) => p),
        showCostI: allCost,
        costTypesIII: costOfTypes,
        pp: pp
    }

    function pp(){
        return this.index
    }


    function allCost(){

        let result = structuresToHoldData.date.filter((p) => p.detailsOfPayent.date.slice(6) == '2014')
        let sum = 0
        for(let i = 0; i < result.length; i++){
            sum = sum + parseFloat(result[i].cost)
        }
        return  `W 2014 roku łącznie wydano: ${sum.toFixed(2)}!!`
    }

    function costOfTypes(){
        let result = this.date.filter((p) => p.detailsOfPayent.Type >=1 && p.detailsOfPayent.Type <= 5)
        let sum = 0
        let sum1 = 0
        for(let i = 0; i < result.length; i++){
            if(result[i].detailsOfPayent.Type == 1){
                sum += parseFloat(result[i].cost)
            }else if(result[i].detailsOfPayent.Type == 2){
                sum1 += parseFloat(result[i].cost)
            }
        }
        return sum.toFixed(2) + '  Wartość wszystkich transakcji typu 1'

    }



    return structuresToHoldData

})()
console.log(mainIffeFunction.showCostI())
console.log(mainIffeFunction.costTypesIII())
// console.log(mainIffeFunction.pp())





