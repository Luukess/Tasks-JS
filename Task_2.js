let list = [1,6,23,8,4,8,3,7];

function firstFunction(){

    let sum = 0;
    for(let i = 0; i < list.length; i++){
        sum = sum + list[i];
    }
    console.log(`Return the sum: ${sum}`);
}
firstFunction();

