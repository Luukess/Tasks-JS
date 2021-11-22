// task 1.

// String.prototype.reverse = function(){
//     return this.split('').reverse().join('')
// }

// console.log("To jest prototyp".reverse())

// Number.prototype.reverse1 = function(){
//     return this * (-1)
// }

// console.log((5).reverse1())

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
        dataForV: getDataFromJons().map(function(p){
            let dData = p.detailsOfPayent.date.toString()
            let nDate = new Date(dData)
            let cost = p.cost
            return{
                nDate,
                cost
            }
        }),
        data: getDataFromJons().map((p) => p),
        showCostI: allCost,
        earnMoneyII: companyEarning,
        costTypesIII: costOfTypes,
        spendingMonthIV: spendingOfMonth,
        spendingDayofWeekV: spendingDayOfWeek
    }

    function allCost(){

        let result = structuresToHoldData.data.filter((p) => p.detailsOfPayent.date.slice(6) == '2014')
        let sum = 0
        for(let i = 0; i < result.length; i++){
            sum = sum + parseFloat(result[i].cost)
        }
        return  `W 2014 roku łącznie wydano: ${sum.toFixed(2)}!!`
    }

    function companyEarning(){
        let result = this.data.filter((p) => p.detailsOfPayent.company == 'ECSTASIA' || p.detailsOfPayent.company == 'MANGELICA' || p.detailsOfPayent.company == 'CODAX')
        let sumE = 0, sumM =0, sumC = 0
        for(let i = 0; i < result.length; i++){
            if(result[i].detailsOfPayent.company == 'ECSTASIA'){
                sumE += parseFloat(result[i].cost)
            }else if(result[i].detailsOfPayent.company == 'MANGELICA'){
                sumM += parseFloat(result[i].cost)
            }else if(result[i].detailsOfPayent.company == 'CODAX')[
                sumC += parseFloat(result[i].cost)
            ]
        }
        console.log(`Firma ECSTASIA zarobiła: ${sumE.toFixed(2)} \nFirma MANGELICA zarobiła: ${sumM.toFixed(2)} \nFimra CODAX zarobiła: ${sumC.toFixed(2)}`)
    }

    function costOfTypes(){
        let result = this.data.filter((p) => p.detailsOfPayent.Type >=1 && p.detailsOfPayent.Type <= 5)
        let sum = 0
        let sum1 = 0
        let sum2 = 0
        let sum3 = 0
        let sum4 = 0
        for(let i = 0; i < result.length; i++){
            if(result[i].detailsOfPayent.Type == 1){
                sum += parseFloat(result[i].cost)
            }else if(result[i].detailsOfPayent.Type == 2){
                sum1 += parseFloat(result[i].cost)
            }else if(result[i].detailsOfPayent.Type == 3){
                sum2 += parseFloat(result[i].cost)
            }else if(result[i].detailsOfPayent.Type == 4){
                sum3 += parseFloat(result[i].cost)
            }else if(result[i].detailsOfPayent.Type == 5){
                sum4 += parseFloat(result[i].cost)
            }
        }
        console.log(`Suma kosztów dla transakcji typu 1: ${sum.toFixed(2)} \nSuma kosztów dla teansakcji typu 2: ${sum1.toFixed(2)} \nSuma kosztów dla transakcji typu 3: ${sum2.toFixed(2)} \nSuma kosztów dla transakcji typu 4: ${sum3.toFixed(2)} \nSuma kosztów dla transakcji typu 5: ${sum4.toFixed(2)}`)
    }

    function spendingOfMonth(){
        let result = this.data.filter((p) => p.detailsOfPayent.date.slice(3,5) >= '01' && p.detailsOfPayent.date.slice(3,5) <= '12')
        let sum = 0, sum1 = 0, sum2 = 0, sum3 = 0, sum4 = 0, sum5 = 0, sum6 = 0, sum7 = 0, sum8 = 0, sum9 = 0, sum10 = 0, sum11 = 0
        for(let i = 0; i < result.length; i++){
            if(result[i].detailsOfPayent.date.slice(3,5) == '01'){
                sum += parseFloat(result[i].cost)
            }else if(result[i].detailsOfPayent.date.slice(3,5) == '02'){
                sum1 += parseFloat(result[i].cost)
            }else if(result[i].detailsOfPayent.date.slice(3,5) == '03'){
                sum2 += parseFloat(result[i].cost)
            }else if(result[i].detailsOfPayent.date.slice(3,5) == '04'){
                sum3 += parseFloat(result[i].cost)
            }else if(result[i].detailsOfPayent.date.slice(3,5) == '05'){
                sum4 += parseFloat(result[i].cost)
            }else if(result[i].detailsOfPayent.date.slice(3,5) == '06'){
                sum5 += parseFloat(result[i].cost)
            }else if(result[i].detailsOfPayent.date.slice(3,5) == '07'){
                sum6 += parseFloat(result[i].cost)
            }else if(result[i].detailsOfPayent.date.slice(3,5) == '08'){
                sum7 += parseFloat(result[i].cost)
            }else if(result[i].detailsOfPayent.date.slice(3,5) == '09'){
                sum8 += parseFloat(result[i].cost)
            }else if(result[i].detailsOfPayent.date.slice(3,5) == '10'){
                sum9 += parseFloat(result[i].cost)
            }else if(result[i].detailsOfPayent.date.slice(3,5) == '11'){
                sum10 += parseFloat(result[i].cost)
            }else if(result[i].detailsOfPayent.date.slice(3,5) == '12'){
                sum11 += parseFloat(result[i].cost)
            }
            
        }
        console.log(`Wydatki w styczniu: ${sum.toFixed(2)} \nWydatki w lutym: ${sum1.toFixed(2)} \nWydatki w marcu: ${sum2.toFixed(2)} \nWydatki w kwietniu: ${sum3.toFixed(2)} \nWydatki w maju: ${sum4.toFixed(2)} \nWydatki w czerwcu: ${sum5.toFixed(2)} \nWydatki w lipcu: ${sum6.toFixed(2)} \nWydatki w sierpniu: ${sum7.toFixed(2)} \nWydatki w wrześniu: ${sum8.toFixed(2)} \nWydatki w październiuk: ${sum9.toFixed(2)} \nWydatki w listopadzie: ${sum10.toFixed(2)} \nWydatki w grudniu ${sum11.toFixed(2)}`)
    }

    function spendingDayOfWeek(){
        let weekday = this.dataForV
        let sumSu = 0, sumM = 0, sumTu = 0, sumW = 0, sumTh = 0, sumF = 0, sumSa = 0, sumNan = 0
        for(let i = 0; i < weekday.length; i++){
            if(weekday[i].nDate.getDay() == 0){
                sumSu += parseFloat(weekday[i].cost)
            }else if(weekday[i].nDate.getDay() == 1){
                sumM += parseFloat(weekday[i].cost)
            }else if(weekday[i].nDate.getDay() == 2){
                sumTu += parseFloat(weekday[i].cost)
            }else if(weekday[i].nDate.getDay() == 3){
                sumW += parseFloat(weekday[i].cost)
            }else if(weekday[i].nDate.getDay() == 4){
                sumTh += parseFloat(weekday[i].cost)
            }else if(weekday[i].nDate.getDay() == 5){
                sumF += parseFloat(weekday[i].cost)
            }else if(weekday[i].nDate.getDay() == 6){
                sumSa += parseFloat(weekday[i].cost)
            }else{
                sumNan += parseFloat(weekday[i].cost)
            }
        }
        console.log(`Suma kosztów w poniedziałek: ${sumM.toFixed(2)} \nSuma kosztów we wtorek: ${sumW.toFixed(2)} \nSuma kosztów we środę: ${sumW.toFixed(2)} \nSuma kosztów we czwartek: ${sumTh.toFixed(2)} \nSuma kosztów w piątek: ${sumF.toFixed(2)} \nSuma kosztów w sobotę: ${sumSa.toFixed(2)} \nSuma kosztów w niedzielę: ${sumSa.toFixed(2)} \nSuma Nan: ${sumNan.toFixed(2)}`)
        // return weekday
    }


    return structuresToHoldData

})()
console.log(mainIffeFunction.showCostI())
mainIffeFunction.earnMoneyII()
mainIffeFunction.costTypesIII()
mainIffeFunction.spendingMonthIV()
mainIffeFunction.spendingDayofWeekV()







