let stringOrNumbers = 'A243b' ;


console.log(takeOnlyNumbers(stringOrNumbers,isNumber(stringOrNumbers)));


function isNumber(stringOrNumbers){
    if(typeof stringOrNumbers === "number"){
        return true;
    }else if(typeof stringOrNumbers === "string"){
        return false;
    }
}

function takeOnlyNumbers(stringOrNumbers, isNumber){

    if(!isNumber){

        let takeDate = stringOrNumbers.split('');
        const numbersArray = new Array();
        
            for(let i = 0; i < takeDate.length; i++){
                let mark = takeDate[i];
                let canBeNumber = Number.parseInt(mark);
                // console.log(canBeNumber);
                if(!Number.isNaN(canBeNumber)){
                    numbersArray.push(canBeNumber);
                }
            }
            return numbersArray

    }else if(isNumber){

        const numbersArray = new Array();
        let takeData = stringOrNumbers.toString();

        for(let i = 0; i < takeData.length; i++){
            let mark = takeData[i];
            mark = Number.parseInt(mark);
            numbersArray.push(mark)
        }
        return numbersArray;
    }

}