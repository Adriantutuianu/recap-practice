// Find Biggest and Smallest
// Write a function that takes an array of numbers and returns the biggest and smallest in an object.

// Example:

// findBiggestAndSmallest([1, 2, 99, 100])

// // returns {biggest: 100, smallest: 1}
// If there is only one number in the array, that will be both the biggest and the smallest.

// If there are no numbers in the array, it should return an empty object.

function findBiggestAndSmallest(numbers) {
  // Your code goes here...
  const biggestNumber = Math.max(...numbers);
  const smallestNumber = Math.min(...numbers);
  if (numbers.length === 1) {
    return { biggest: numbers[0], smallest: numbers[0] };
  } else if (!numbers.length) {
    return {};
  } else {
    return { biggest: biggestNumber, smallest: smallestNumber };
  }
}
