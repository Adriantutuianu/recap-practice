// Find the First Odd Number
// Complete the function findFirstOdd, so that it takes an array of numbers and returns the first odd number.

// If there are no odd numbers, the function should return undefined.

// Examples:

// findFirstOdd([1,4,5])
// // returns 1

// findFirstOdd([2,4,5])
// // returns 5

// findFirstOdd([2,4,6])
// // returns undefined

function findFirstOdd(numbers) {
  // Your code goes here...
  const odds = [];
  numbers.forEach((a) => {
    if (a % 2 !== 0) {
      odds.push(a);
    }
  });

  if (!odds.length) {
    return undefined;
  } else {
    return odds[0];
  }
}
