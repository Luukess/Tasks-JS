// task 1.
let years = [1974,1900,1985,2000]
let year

for(let i = 0; i< years.length; i++){
    year = years[i]
    if((year%4===0 || year%100===0) && year%100===0)
    {
        console.log(year,"Task 1.")
    }
}

// task 2.
let n = 7
let sum = 1

while(n>0){
    sum=sum*n--
    console.log(sum)
}
console.log(sum, "Task 2.")

// task 3.
let li = [1,6,23,8,4,98,3,7,3,98,4,98]
let sum1 = 0

for(let i =0; i < li.length; i++){
    if(li[i]%2 != 0){
        sum1 = sum1 + li[i]
    }
}
console.log(sum1, "Task 3.")

// task 4.

let li1 = [1,6,23,8,4,98,3,7,3,98,4,98]
let max = li1[0]
let min = li1[0]

for(let i = 0; i < li1.length; i++){
    if(max <= li1[i]){
        max = li1[i]
    }

    if(min >= li1[i]){
        min = li1[i]
    }

}
console.log(`Max: ${max}, Min: ${min}`, "Task 4.");
//  task 5. 

let li2 = ["Karol", "Adam", "Rogowski", "Politechnika", "Super", "Weekend"]
let long = ""

for(let i = 0; i < li2.length; i++){
    if(li2[i].length >= long.length){
        long = li2[i]
    }
}
console.log(long, "Task 5.")
