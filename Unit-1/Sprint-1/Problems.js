// Problem - 1
// Given an array of int print all the odd index items in a single line.
// Input : [2,5,6,6,8,7,7,10]
// Output expected : 5 6 7 10


// Solution Problem - 1

let arr = [2, 5, 6, 6, 8, 7, 7, 10];
let bag = "";
for (let i = 0; i < arr.length; i++) {
    if (i%2!==0){
        bag += arr[i] + " ";
    }
}
console.log(bag)

