// task 1.
let years = [1974,1900,1985,2000];
let year;

for(let i = 0; i< years.length; i++){
    year = years[i];
    if((year%4===0 || year%100===0) && year%100===0)
    {
        console.log(year,"Task 1.");
    }
}

// task 2.
let n = 7;
let sum = 1;

while(n>0){
    sum=sum*n--;
}
console.log(sum, "Task 2.");

// task 3.
let li = [1,6,23,8,4,98,3,7,3,98,4,98];
let sum1 = 0;

for(let i =0; i < li.length; i++){
    if(li[i]%2 != 0){
        sum1 = sum1 + li[i];
    }
}
console.log(sum1, "Task 3.");

// task 4.

let li2 = [1,6,23,8,4,98,3,7,3,98,4,98];
let max = li2[0];
let min = li2[0];

for(let i = 0; i < li2.length; i++){
    if(max <= li2[i]){
        max = li2[i];
    }

    if(min >= li2[i]){
        min = li2[i];
    }
}
console.log(`Max: ${max}, Min: ${min}`, "Task 4.");
//  task 5. 

let li3 = ["Karol", "Adam", "Rogowski", "Politechnika", "Super", "Weekend"]
let long = ""

for(let i = 0; i < li3.length; i++){
    if(li3[i].length >= long.length){
        long = li3[i];
    }
}
console.log(long, "Task 5.");


// task 6.

let li4 = [1,6,23,8,4,98,3,7,3,98,4,98];
let max2 = Math.max(...li4);
let nList = [];
// console.log(max2)

for(let i = 0; i < li4.length; i++){
    if(li4[i] === max2){
        nList.push(i);
    }
}
console.log(nList, "Task 6.");


// task 7.

let li5 = [1,6,23,8,4,98,3,7,3,98,4,98];
let item = 0;
let average = 0;

for(let i = 0; i < li5.length; i++){
    if(li5[i]%2 === 0 ){
        item = item + li5[i];
        average = (item/li5.length);
    }
}
console.log(item, average.toFixed(2), "Task 7.")

//  task 8.

let li6 = [1,6,23,8,4,98,3,7,3,98,4,98];
let item2 = 0;
let item3 = [];
let average2 = 0;

for(let i = 1; i < li6.length; i++){
    if(i%2 === 0){
        item2 = item2 + li6[i];
        item3.push(i);
        average2 = (item2/item3.length);
    }
}
console.log(item2, average2, "Task 8.")

//  task 9.

let li7 = [1,6,23,8,4,98,3,7,3,98,4,98];
let oddItems = 0;
let evenItems = 0;
let substract = 0;

for(let i = 0; i < li7.length; i++){
    if(li7[i]%2 == 0){
        evenItems = evenItems + li7[i];
    }

    if(li7[i]%2 !== 0){
        oddItems = oddItems + li7[i];
    }

    substract = evenItems - oddItems;

}

console.log(`evenItems: ${evenItems} oddItems: ${oddItems} substract: ${substract} Task 9.`);

