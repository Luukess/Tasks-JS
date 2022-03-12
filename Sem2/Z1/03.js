let k = 2;
let numberOfArrElements = 6;

console.log(rotateArray(createArr(numberOfArrElements),k, isPositive(k)))

function rotateArray(arr, k, isPositive){
    if(isPositive && typeof k === "number"){
        for(let i = 0; i < k; i++){
            let takeElement = arr.shift()
            arr.push(takeElement)
        }
        return arr
    }else if(!isPositive && typeof k === "number"){
        let step = 0;
        k *= -1
        while(step < k){
            let takeElement = arr.pop()
            arr.unshift(takeElement)
            step++
        }
        return arr
    }else{
        return arr
    }
}

function isPositive(k){
    if(k > 0){
        return true;
    }else{
        return false;
    }
}

function createArr(numberOfArrElements){
    let arr = new Array();
    for(let i = 1; i <= numberOfArrElements; i++){
        arr.push(i)
    }
    return arr
}