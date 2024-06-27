// Create a function that takes in an array of numbers.
// Your function should return the sum of the first and last
// numbers from the array.

// Examples:

// addFirstAndLast([3, 2, 6])
//     should evaluate to 9

// addFirstAndLast([-9, 12, 33, 29])
//     should evaluate to 20

let ages = [20,40,60,80,100];

// function addFirstAndLast(array) {
//   if (array.length-1){
//     return 
//   }
// }


function addFirstAndLast (Arrays) {

let sum = Arrays[0] + Arrays[Arrays.length - 1];
return sum;
}

console.log(addFirstAndLast(ages));




try {
  module.exports = addFirstAndLast;
} catch (err) {
  // do nothing...
}