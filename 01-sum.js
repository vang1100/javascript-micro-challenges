// Create a function that takes in two numbers.
// Your function should return the sum of the two numbers passed in.

// Examples:

// sum(2, 3) 
//     should evaluate to 5

// sum(2, 7)
//     should evaluate to 9

console.log('testing');

function sum( num1, num2 ) {
  console.log('should evaluate to', num1, num2 );
return num1 + num2;

}

//let result = total (7, 9); 
console.log(sum(2,3));
console.log(sum(100, 100));

//function sum(1,1);


try {
  module.exports = sum;
} catch (err) {
  // do nothing...
}
