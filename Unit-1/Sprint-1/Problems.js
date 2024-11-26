// Problem - 1
// Given an array of int print all the odd index items in a single line.
// Input : [2,5,6,6,8,7,7,10]
// Output expected : 5 6 7 10


// Solution Problem - 1

// let arr = [2, 5, 6, 6, 8, 7, 7, 10];
// let bag = "";
// for (let i = 0; i < arr.length; i++) {
//     if (i%2!==0){
//         bag += arr[i] + " ";
//     }
// }
// console.log(bag)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Pronblem - 2
// Given an array find out the number of elements for which both the neighbor are greater than the element.
// Input = [5,7,6,9,8,10];
// Output expected : 6 8


// Solution Problem - 2

// let array = [5,7,6,9,8,10];
// let bag = "";
// for (let i = 1; i<array.length-1; i++){
//     if (array[i]<array[i-1] && array[i]<array[i+1]){
//         bag+=array[i] + " ";
//     }
// }
// console.log(bag)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Problem - 3
// Given an Array of int , Find out the count of such occurrence of Element in the array where one of neighbours of the Element is a Prime Number.
// Input : [5,7,12,11,15,3];
// Output expected : 4

// Solution Problem - 2

// let arr = [5, 7, 12, 11, 15, 3];
// let count = 0;
// function isPrime(num) {
//     // Helper function to check weather the num is prime or not...
//     for (let i = 2; i * i <= num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     } return true;
// }
// for (let i = 0; i < arr.length; i++) {
//     let prev = arr[i - 1];
//     let next = arr[i + 1];
//     if (prev !== undefined && isPrime(prev) || next !== undefined && isPrime(next)) {
//         count++;
//     }
// }
// console.log(count)\

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


